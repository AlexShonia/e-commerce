import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { axiosClient } from "../axiosConfig";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { getOrderDetails } from "../features/orderSlice";

function OrderScreen() {
	const dispatch = useDispatch();

	const userInfo = useSelector((state) => state.userLogin.userInfo);
	const { id } = useParams();
	const [order, setOrder] = useState();

	const { isLoading, error } = useQuery(
		"productDetails",
		async () => {
			const response = await axiosClient.get(`/api/orders/${id}/`, {
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${userInfo.token}`,
				},
			});
			return response.data;
		},
		{
			onSuccess: (data) => {
				data.itemsPrice = data.orderItems
					.reduce((acc, item) => acc + item.price * item.qty, 0)
					.toFixed(2);

				setOrder(data);
				dispatch(getOrderDetails(data));
			},
		}
	);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error.response.data.detail}</Message>
			) : order ? (
				<>
					<h1>Order: {order._id}</h1>
					<Row>
						<Col md={8}>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<h2>Shipping Address</h2>
									<p>
										<strong>Name: </strong>
										{order.user.name}
									</p>
									<p>
										<strong>Email: </strong>
										<a href={`mailto:${order.user.email}`}>
											{order.user.email}
										</a>
									</p>
									<p>
										<strong>Shipping: </strong>
										{order.shippingAddress.address},{" "}
										{order.shippingAddress.city},{" "}
										{order.shippingAddress.postalCode},{" "}
										{order.shippingAddress.country}
										{order.isDelivered ? (
											<Message variant="success">
												Delivered on:{" "}
												{order.deliveredAt}
											</Message>
										) : (
											<Message variant="warning">
												Not Delivered
											</Message>
										)}
									</p>
								</ListGroup.Item>
								<ListGroup.Item>
									<h2>Payment Method</h2>
									<p>
										<strong>Method </strong>
										{order.paymentMethod}
									</p>
									{order.isPaid ? (
										<Message variant="success">
											Paid on: {order.paidAt}
										</Message>
									) : (
										<Message variant="warning">
											Not Paid
										</Message>
									)}
								</ListGroup.Item>
								<ListGroup.Item>
									<h2>Order Items</h2>
									{order.orderItems.length === 0 ? (
										<Message variant="info">
											Your order is Empty
										</Message>
									) : (
										<ListGroup variant="flush">
											{order.orderItems.map(
												(item, index) => (
													<ListGroup.Item key={index}>
														<Row>
															<Col md={2}>
																<Image
																	src={
																		item.image
																	}
																	alt={
																		item.name
																	}
																	fluid
																	rounded
																/>
															</Col>
															<Col>
																<Link
																	to={`/product/${item.id}`}
																>
																	{item.name}
																</Link>
															</Col>
															<Col md={4}>
																{item.qty} X $
																{item.price} = $
																{(
																	item.qty *
																	item.price
																).toFixed(2)}
															</Col>
														</Row>
													</ListGroup.Item>
												)
											)}
										</ListGroup>
									)}
								</ListGroup.Item>
							</ListGroup>
						</Col>

						<Col md={4}>
							<Card>
								<ListGroup variant="flush">
									<ListGroup.Item>
										<h2>Order Summary</h2>
									</ListGroup.Item>
									<ListGroup.Item>
										<Row>
											<Col>Items: </Col>
											<Col>${order.itemsPrice}</Col>
										</Row>
									</ListGroup.Item>
									<ListGroup.Item>
										<Row>
											<Col>Shipping: </Col>
											<Col>${order.shippingPrice}</Col>
										</Row>
									</ListGroup.Item>
									<ListGroup.Item>
										<Row>
											<Col>Tax: </Col>
											<Col>${order.taxPrice}</Col>
										</Row>
									</ListGroup.Item>
									<ListGroup.Item>
										<Row>
											<Col>Total: </Col>
											<Col>${order.totalPrice}</Col>
										</Row>
									</ListGroup.Item>
									<ListGroup.Item>
										{error && (
											<Message variant="danger">
												{error.response.data.detail}
											</Message>
										)}
									</ListGroup.Item>
								</ListGroup>
							</Card>
						</Col>
					</Row>
				</>
			) : (
				""
			)}
		</>
	);
}

export default OrderScreen;
