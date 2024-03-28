import React, { useEffect, useState } from "react";
import { setUserDetails } from "../features/userDetailsSlice";
import { Login } from "../features/authSlice";
import { getMyOrders } from "../features/orderSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { axiosClient } from "../axiosConfig";
import { useMutation, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Row, Col, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSearchParams, useNavigate } from "react-router-dom";

function ProfileScreen() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState("");

	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const userInfo = useSelector((state) => state.userLogin.userInfo);
	const user = useSelector((state) => state.userDetails.user);
	const myOrders = useSelector((state) => state.order.myOrders);
	const { error, isLoading } = useQuery(
		"profile",
		async () => {
			const response = await axiosClient.get('/api/users/profile/', {
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${userInfo.token}`,
				},
			});
			return response.data;
		},
		{
			onSuccess: (data) => {
				dispatch(setUserDetails(data));
			},
			onError: (error) => {
				console.log("Login error", error.response.data.detail);
			},
		}
	);

	const { error: ordersError, isLoading: ordersIsLoading } = useQuery(
		"myorders",
		async () => {
			const response = await axiosClient.get("/api/orders/myorders/", {
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${userInfo.token}`,
				},
			});
			return response.data;
		},
		{
			onSuccess: (data) => {
				dispatch(getMyOrders(data));
			},
			onError: (error) => {
				console.log("error getting myOrders: ", error);
			},
		}
	);

	const updateProfileMutation = useMutation(
		async () => {
			const response = await axiosClient.put(
				"/api/users/profile/update/",
				{
					name: name,
					email: email,
					password: password,
				},
				{
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${userInfo.token}`,
					},
				}
			);
			return response.data;
		},
		{
			onSuccess: (data) => {
				dispatch(Login(data));
				dispatch(setUserDetails(data));
			},
			onError: (error) => {
				console.log("Login error", error.response.data.detail);
			},
		}
	);

	useEffect(() => {
		if (!userInfo) {
			navigate("/");
		} else if (user) {
			setName(user.name);
			setEmail(user.email);
		}
	}, [user]);

	function submitHandler(e) {
		e.preventDefault();
		if (password != confirmPassword) {
			setMessage("Passwords do not match");
		} else {
			setMessage("");
			updateProfileMutation.mutate();
		}
	}

	return (
		<Row>
			<Col md={3}>
				<h2>User Profile</h2>

				{error && (
					<Message variant="danger">
						{error.response.data.detail}
					</Message>
				)}
				{isLoading && <Loader />}
				<Form onSubmit={submitHandler}>
					<Form.Group controlId="name">
						<Form.Label>Username</Form.Label>
						<Form.Control
							required
							type="name"
							placeholder="Enter Your Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group controlId="email">
						<Form.Label>Email Address</Form.Label>
						<Form.Control
							required
							type="email"
							placeholder="Enter Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Enter Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group controlId="passwordConfirm">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Confirm Password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						></Form.Control>
					</Form.Group>
					{message ? (
						<Message variant="danger">{message}</Message>
					) : (
						""
					)}
					<Button type="submit" className="my-3">
						Update
					</Button>
				</Form>
			</Col>
			<Col md={9}>
				<h2>My Orders</h2>
				{ordersIsLoading ? (
					<Loader />
				) : ordersError ? (
					<Message variant='danger'>{ordersError.response.data.detail}</Message>
				) : (
					<Table striped responsive className="table-sm">
						<thead>
							<tr>
								<th>ID</th>
								<th>Data</th>
								<th>Total</th>
								<th>Paid</th>
								<th>Delivered</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{myOrders.map((order) => (
								<tr key={order._id}>
									<td>{order._id}</td>
									<td>{order.createdAt.substring(0, 10)}</td>
									<td>${order.totalPrice}</td>
									<td>
										{order.isPaid ? (
											<div style={{ color: "green" }}>
												{order.paidAt?.substring(0, 10)}
											</div>
										) : (
											<i
												className="fas fa-times"
												style={{ color: "red" }}
											></i>
										)}
									</td>
									<td>
										<LinkContainer
											to={`/order/${order._id}`}
										>
											<Button className="btn-sm">
												Details
											</Button>
										</LinkContainer>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
			</Col>
		</Row>
	);
}

export default ProfileScreen;
