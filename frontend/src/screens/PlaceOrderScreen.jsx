import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { axiosClient } from "../axiosConfig";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { createOrder, orderReset } from "../features/orderSlice";
import { cartReset } from "../features/cartSlice";

function PlaceOrderScreen() {
	const cart = useSelector((state) => state.cart);
	const editedCart = [...cart.cartItems];

	editedCart.itemsPrice = editedCart
		.reduce((acc, item) => acc + item.price * item.qty, 0)
		.toFixed(2);
	editedCart.shippingPrice = (editedCart.itemsPrice > 100 ? 0 : 10).toFixed(
		2
	);

	editedCart.taxPrice = Number(editedCart.itemsPrice * 0.082).toFixed(2);
	editedCart.totalPrice = (
		Number(editedCart.itemsPrice) +
		Number(editedCart.shippingPrice) +
		Number(editedCart.taxPrice)
	).toFixed(2);

	const navigate = useNavigate();
	const userInfo = useSelector((state) => state.userLogin.userInfo);
	const dispatch = useDispatch();
	const mutation = useMutation(
		async () => {
			const response = await axiosClient.post(
				"/api/orders/add/",
				{
					orderItems: cart.cartItems,
					shippingAddress: cart.shippingAddress,
					paymentMethod: cart.paymentMethod,
					itemsPrice: editedCart.itemsPrice,
					shippingPrice: editedCart.shippingPrice,
					taxPrice: editedCart.taxPrice,
					totalPrice: editedCart.totalPrice,
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
				dispatch(createOrder(data));
				dispatch(orderReset());
				dispatch(cartReset());
				navigate(`/order/${data._id}`);
			},
			onError: (error) => {
				console.log("Login error", error.response.data.detail);
			},
		}
	);
	const { error } = mutation;
	function placeOrder() {
		mutation.mutate();
		console.log("placeOrder");
	}
	return (
		<div>
			<CheckoutSteps step1 step2 step3 step4 />
			<Row>
				<Col md={8}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>Shipping</h2>
							<p>
								<strong>Shipping: </strong>
								{cart.shippingAddress.address},{" "}
								{cart.shippingAddress.city},{" "}
								{cart.shippingAddress.postalCode},{" "}
								{cart.shippingAddress.country}
							</p>
						</ListGroup.Item>
						<ListGroup.Item>
							<h2>Payment Method</h2>
							<p>
								<strong>Method </strong>
								{cart.paymentMethod}
							</p>
						</ListGroup.Item>
						<ListGroup.Item>
							<h2>Order Items</h2>
							{cart.cartItems.length === 0 ? (
								<Message variant="info">
									Your Cart is Empty
								</Message>
							) : (
								<ListGroup variant="flush">
									{cart.cartItems.map((item, index) => (
										<ListGroup.Item key={index}>
											<Row>
												<Col md={2}>
													<Image
														src={
															import.meta.env
																.VITE_IMG_PREFIX +
															item.image
														}
														alt={item.name}
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
													{item.qty} X ${item.price} =
													$
													{(
														item.qty * item.price
													).toFixed(2)}
												</Col>
											</Row>
										</ListGroup.Item>
									))}
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
									<Col>${editedCart.itemsPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Shipping: </Col>
									<Col>${editedCart.shippingPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Tax: </Col>
									<Col>${editedCart.taxPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Total: </Col>
									<Col>${editedCart.totalPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								{error && (
									<Message variant="danger">
										{error.response.data.detail}
									</Message>
								)}
							</ListGroup.Item>
							<ListGroup.Item className="d-grid">
								<Button
									type="button"
									variant="primary"
									disabled={cart.cartItems.length === 0}
									onClick={placeOrder}
								>
									Place Order
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default PlaceOrderScreen;
