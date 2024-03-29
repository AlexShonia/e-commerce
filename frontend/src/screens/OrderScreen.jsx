import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
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

	const { isLoading, error, refetch } = useQuery(
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

	const payOrder = useMutation(
		async () => {
			const response = await axiosClient.put(
				`/api/orders/${id}/pay/`,
				{},
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
				refetch();
			},
		}
	);
	const { isLoading: loadingPay, isSuccess } = payOrder;

	function onCreateOrder(data, actions) {
		return actions.order.create({
			purchase_units: [
				{
					amount: {
						value: order.totalPrice,
					},
				},
			],
		});
	}
	function onApproveOrder(data, actions) {
		return actions.order
			.capture()
			.then((details) => {
				payOrder.mutate();
			})
			.catch((error) => {
				console.log(error);
			});
	}

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
									</p>
									{order.isDelivered ? (
										<Message variant="success">
											Delivered on:{" "}
											{order.deliveredAt?.substring(
												0,
												10
											)}
										</Message>
									) : (
										<Message variant="warning">
											Not Delivered
										</Message>
									)}
								</ListGroup.Item>
								<ListGroup.Item>
									<h2>Payment Method</h2>
									<p>
										<strong>Method </strong>
										{order.paymentMethod}
									</p>
									{order.isPaid ? (
										<Message variant="success">
											Paid on:{" "}
											{order.paidAt?.substring(0, 10)}
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
																		axiosClient.defaults.baseURL.slice(
																			0,
																			-1
																		) +
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
									{error && (
										<ListGroup.Item>
											<Message variant="danger">
												{error.response.data.detail}
											</Message>
										</ListGroup.Item>
									)}
									{!order.isPaid && (
										<ListGroup.Item>
											<PayPalScriptProvider
												options={{
													clientId:
														"ATnw-Lq2GXW48MU2SGG2bJD6_S0LcATzZJI4CzShqpMP_SiTdiUbOXFLfxE0CvPObqvMoHN6SMbwSGx6",
												}}
											>
												{/* TODO: add a a spinner while paypal button is loading */}
												<PayPalButtons
													createOrder={(
														data,
														actions
													) =>
														onCreateOrder(
															data,
															actions
														)
													}
													onApprove={(
														data,
														actions
													) =>
														onApproveOrder(
															data,
															actions
														)
													}
													onError={(error) => {
														console.log(error);
													}}
												/>
											</PayPalScriptProvider>
										</ListGroup.Item>
									)}
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
