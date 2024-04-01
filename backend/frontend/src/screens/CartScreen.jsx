import { useDispatch, useSelector } from "react-redux";
import { cartAddItem, cartRemoveItem } from "../features/cartSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { axiosClient } from "../axiosConfig";
import { useQuery } from "react-query";

import {
	Row,
	Col,
	Image,
	Button,
	ListGroup,
	Form,
	Card,
} from "react-bootstrap";
function CartScreen() {
	const dispatch = useDispatch();
	const { id } = useParams();
	const [searchParams] = useSearchParams();
	const qty = searchParams.get("qty");
	const navigate = useNavigate();
	const {
		data: product,
		isLoading,
		error,
	} = useQuery("productDetails", async () => {
		if (id) {
			const response = await axiosClient.get(`/api/products/${id}`);
			return response.data;
		}
	});

	useEffect(() => {
		if (product && qty) {
			const productWithQty = { ...product, qty: qty };
			dispatch(cartAddItem(productWithQty));
		}
	}, [dispatch, id, qty]);

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	function changeQty(item, quantity, idx) {
		const smth = { ...item, qty: quantity, _id: idx };

		dispatch(cartAddItem(smth));
	}

	const removeFromCartHandler = (idx) => {
		dispatch(cartRemoveItem(idx));
	};

	const checkoutHandler = () => {
		navigate(`/login?redirect=shipping`);
	};

	return (
		<Row>
			<Col md={8}>
				<h1>Shopping Cart</h1>
				{isLoading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : cartItems.length === 0 ? (
					<Message variant="info">
						Your cart is empty <Link to="/">Go Back</Link>
					</Message>
				) : (
					<ListGroup variant="flush">
						{cartItems.map((item) => (
							<ListGroup.Item key={item.id}>
								<Row>
									<Col md={2}>
										<Image
											src={
												axiosClient.defaults.baseURL.slice(
													0,
													-1
												) + "/static" + item.image
											}
											alt={item.name}
											fluid
											rounded
										/>
									</Col>
									<Col md={3}>
										<Link to={`/product/${item.id}`}>
											{item.name}
										</Link>
									</Col>
									<Col md={2}>${item.price}</Col>
									<Col md={3}>
										<Form.Select
											size="sm"
											value={item.qty}
											onChange={(e) =>
												changeQty(
													item,
													Number(e.target.value),
													item.id
												)
											}
										>
											{[
												...Array(
													item.countInStock
												).keys(),
											].map((i) => (
												<option
													value={i + 1}
													key={i + 1}
												>
													{i + 1}
												</option>
											))}
										</Form.Select>
									</Col>
									<Col>
										<Button
											type="button"
											variant="light"
											onClick={() =>
												removeFromCartHandler(item.id)
											}
										>
											<i className="fas fa-trash"></i>
										</Button>
									</Col>
								</Row>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
			</Col>
			<Col md={4}>
				<Card>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>
								Subtotal(
								{cartItems.reduce(
									(acc, item) => acc + item.qty,
									0
								)}
								) Items
							</h2>
							$
							{cartItems
								.reduce(
									(acc, item) => acc + item.qty * item.price,
									0
								)
								.toFixed(2)}
						</ListGroup.Item>
						<ListGroup.Item className="d-grid">
							<Button
								type="button"
								variant="primary"
								disabled={cartItems.length === 0}
								onClick={checkoutHandler}
							>
								Proceed To Checkout
							</Button>
						</ListGroup.Item>
					</ListGroup>
				</Card>
			</Col>
		</Row>
	);
}

export default CartScreen;
