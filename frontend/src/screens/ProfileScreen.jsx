import React, { useEffect, useState } from "react";
import { setUserDetails } from "../features/userDetailsSlice";
import { Login } from "../features/authSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { axiosClient } from "../axiosConfig";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Row, Col } from "react-bootstrap";
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

	const getProfileMutation = useMutation(
		async () => {
			const response = await axiosClient.get(`/api/users/profile/`, {
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
		} else {
			if (!user || !user.name) {
				getProfileMutation.mutate();
			} else {
				setName(user.name);
				setEmail(user.email);
			}
		}
	}, [user]);

	function submitHandler(e) {
		e.preventDefault();
		if (password != confirmPassword) {
			setMessage("Passwords do not match");
		} else {
			updateProfileMutation.mutate();
		}
	}
	const { error } = getProfileMutation;
	return (
		<Row>
			<Col md={3}>
				<h2>User Profile</h2>

				{error && (
					<Message variant="danger">
						{error.response.data.detail}
					</Message>
				)}
				{getProfileMutation.isLoading && <Loader />}
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
					<Button type="submit">Update</Button>
				</Form>
			</Col>
			<Col md={9}>
				<h2>My Orders</h2>
			</Col>
		</Row>
	);
}

export default ProfileScreen;
