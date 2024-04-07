import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import { Button, Table, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { axiosClient } from "../axiosConfig";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function OrderListScreen() {
	const dispatch = useDispatch();
	const [orderList, setOrderList] = useState();
	const navigate = useNavigate();
	const userInfo = useSelector((state) => state.userLogin.userInfo);
	const { error, isLoading, refetch } = useQuery(
		"userList",
		async () => {
			const response = await axiosClient.get("/api/orders/", {
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${userInfo.token}`,
				},
			});
			return response.data;
		},
		{
			onSuccess: (data) => {
				setOrderList(data);
			},
			onError: (error) => {
				console.log("error getting orders: ", error);
			},
		}
	);
	const [idToDelete, setIdToDelete] = useState();

	useEffect(() => {
		if (!userInfo || !userInfo.isAdmin) {
			navigate("/login");
		}
	}, [userInfo]);

	return (
		<>
			<h2>Orders</h2>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error.response.data.detail}</Message>
			) : orderList ? (
				<Table striped bordered responsive hover className="table-sm">
					<thead>
						<tr>
							<th>ID</th>
							<th>User</th>
							<th>Date</th>
							<th>Total</th>
							<th>Paid</th>
							<th>Delivered</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{orderList.map((order) => (
							<tr key={order._id}>
								<td>{order._id}</td>
								<td>{order.user && order.user.name}</td>
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
									{order.isDelivered ? (
										<div style={{ color: "green" }}>
											{order.deliveredAt?.substring(
												0,
												10
											)}
										</div>
									) : (
										<i
											className="fas fa-times"
											style={{ color: "red" }}
										></i>
									)}
								</td>
								<td>
									<LinkContainer to={`/order/${order._id}`}>
										<Button className="btn-sm">
											Details
										</Button>
									</LinkContainer>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			) : (
				""
			)}
		</>
	);
}

export default OrderListScreen;
