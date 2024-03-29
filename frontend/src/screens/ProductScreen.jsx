import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
	Row,
	Col,
	Image,
	ListGroup,
	Button,
	Card,
	Form,
} from "react-bootstrap";
import { useMutation } from "react-query";

import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useQuery } from "react-query";
import { axiosClient } from "../axiosConfig";

import { setProductDetails } from "../features/getProductDetailsSlice";

function ProductScreen() {
	const [qty, setQty] = useState(1);
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState("");
	const { id } = useParams();
	const navigate = useNavigate();
	const userInfo = useSelector((state) => state.userLogin.userInfo);

	const {
		data: product,
		isLoading,
		error,
		refetch,
	} = useQuery("productDetails", async () => {
		const response = await axiosClient.get(`/api/products/${id}`);
		return response.data;
	});

	const dispatch = useDispatch();

	const mutation = useMutation(
		async () => {
			const response = await axiosClient.post(
				`/api/products/${id}/reviews/`,
				{
					rating,
					comment,
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
				refetch();
				setRating(0);
				setComment("");
			},
			onError: (error) => {
				console.log("Review error", error.response.data.detail);
			},
		}
	);

	useEffect(() => {
		if (product) {
			dispatch(setProductDetails(product));
		}
	}, [dispatch, id]);

	const addToCartHandler = () => {
		navigate(`/cart/${id}?qty=${qty}`);
	};
	function submitHandler(e) {
		e.preventDefault();
		mutation.mutate();
	}

	return (
		<div>
			<Link to="/" className="btn btn-light my-3">
				Go Back
			</Link>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<>
					<Row>
						<Col md={6}>
							<Image
								src={
									axiosClient.defaults.baseURL.slice(0, -1) +
									product.image
								}
								alt={product?.name}
								fluid
							/>
						</Col>

						<Col md={3}>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<h3>{product?.name}</h3>
								</ListGroup.Item>

								<ListGroup.Item>
									<Rating
										value={product?.rating}
										text={`${product?.numReviews} reviews`}
										color={"#f8e825"}
									/>
								</ListGroup.Item>

								<ListGroup.Item>
									Price: ${product?.price}
								</ListGroup.Item>
								<ListGroup.Item>
									Description: {product?.description}
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col md={3}>
							<Card>
								<ListGroup variant="flush">
									<ListGroup.Item>
										<Row>
											<Col>Price: </Col>
											<Col>
												<strong>
													${product?.price}
												</strong>
											</Col>
										</Row>
									</ListGroup.Item>

									<ListGroup.Item>
										<Row>
											<Col>Status: </Col>
											<Col>
												{product &&
												product.countInStock > 0
													? "In Stock"
													: "Out of Stock"}
											</Col>
										</Row>
									</ListGroup.Item>
									{product && product.countInStock > 0 && (
										<ListGroup.Item>
											<Row>
												<Col>Qty</Col>
												<Col xs="auto" className="my-1">
													<Form.Select
														size="sm"
														value={qty}
														onChange={(e) =>
															setQty(
																Number(
																	e.target
																		.value
																)
															)
														}
													>
														{[
															...Array(
																product.countInStock
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
											</Row>
										</ListGroup.Item>
									)}
									<ListGroup.Item className="d-grid">
										<Button
											onClick={addToCartHandler}
											variant="primary"
											disabled={
												product?.countInStock <= 0
											}
											type="button"
										>
											Add to Cart
										</Button>
									</ListGroup.Item>
								</ListGroup>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col md={6}>
							<h4>Reviews</h4>
							{product.reviews.length === 0 && (
								<Message variant="info">No Reviews</Message>
							)}
							<ListGroup variant="flush">
								{product.reviews.map((review) => (
									<ListGroup.Item key={review._id}>
										<strong>{review.name}</strong>
										<Rating
											value={review.rating}
											color="#f8e825"
										/>
										<p>
											{review.createdAt.substring(0, 10)}
										</p>
										<p>{review.comment}</p>
									</ListGroup.Item>
								))}
								<ListGroup.Item>
									<h4>Write a review</h4>
									{mutation.isLoading && <Loader />}
									{mutation.isSuccess && (
										<Message variant="success">
											Review Submitted
										</Message>
									)}
									{mutation.error && (
										<Message variant="danger">
											{
												mutation.error.response.data
													.detail
											}
										</Message>
									)}
									{userInfo ? (
										<Form onSubmit={submitHandler}>
											<Form.Group controlId="rating">
												<Form.Label>Rating</Form.Label>
												<Form.Control
													as="select"
													value={rating}
													onChange={(e) =>
														setRating(
															e.target.value
														)
													}
												>
													<option value="">
														Select...
													</option>
													<option value="1">
														1 - Poor
													</option>
													<option value="2">
														2 - Fair
													</option>
													<option value="3">
														3 - Good
													</option>
													<option value="4">
														4 - Very Good
													</option>
													<option value="5">
														5 - Excellent
													</option>
												</Form.Control>
											</Form.Group>
											<Form.Group controlId="comment">
												<Form.Label>Review</Form.Label>
												<Form.Control
													as="textarea"
													rows="5"
													value={comment}
													onChange={(e) =>
														setComment(
															e.target.value
														)
													}
												>
													Rei
												</Form.Control>
											</Form.Group>
											<Button
												disabled={mutation.isLoading}
												type="submit"
												variant="primary"
											>
												Submit
											</Button>
										</Form>
									) : (
										<Message variant="info">
											Please{" "}
											<Link to="/login">login</Link> to
											write a review
										</Message>
									)}
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</>
			)}
		</div>
	);
}

export default ProductScreen;
