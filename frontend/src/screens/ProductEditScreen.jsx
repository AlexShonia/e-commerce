import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { axiosClient } from "../axiosConfig";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteProductBtn from "../components/DeleteProductBtn";

function ProductEditScreen() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [image, setImage] = useState("");
	const [brand, setBrand] = useState("");
	const [countInStock, setCountInStock] = useState(0);
	const [category, setCategory] = useState("");
	const [description, setDescription] = useState("");
	const [uploading, setUploading] = useState(false);
	const { id } = useParams();

	const navigate = useNavigate();
	const { userInfo } = useSelector((state) => state.userLogin);

	const { error: getUserError, isLoading: userLoading } = useQuery(
		"product",
		async () => {
			const response = await axiosClient.get(`/api/products/${id}/`, {
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${userInfo.token}`,
				},
			});
			return response.data;
		},
		{
			onSuccess: (data) => {
				setName(data.name);
				setPrice(data.price);
				setImage(data.image);
				setBrand(data.brand);
				setCountInStock(data.countInStock);
				setCategory(data.category);
				setDescription(data.description);
			},
			onError: (error) => {
				console.log("Error getting user: ", error);
			},
			refetchOnWindowFocus: false,
		}
	);

	const mutation = useMutation(
		async () => {
			const response = await axiosClient.put(
				`/api/products/update/${id}/`,
				{
					name,
					price,
					brand,
					countInStock,
					category,
					description,
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
				navigate("/admin/productlist");
			},
			onError: (error) => {
				console.log("User update error", error.response.data.detail);
			},
		}
	);

	function submitHandler(e) {
		e.preventDefault();
		mutation.mutate();
	}
	async function uploadFileHandler(e) {
		const file = e.target.files[0];
		const formData = new FormData();

		formData.append("image", file);
		formData.append("product_id", id);

		setUploading(true);

		try {
			const config = {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			};
			const { data } = await axiosClient.post(
				"api/products/upload/",
				formData,
				config
			);
			setImage(data);
			setUploading(false);
		} catch (error) {
			console.log("error uploading file: ", error);
			setUploading(false);
		}
	}

	useEffect(() => {
		if (!userInfo || !userInfo.isAdmin) {
			navigate("/login");
		}
	}, [userInfo]);
	return (
		<>
			<Link to="/admin/productlist">Go Back</Link>
			<FormContainer>
				<h1>Edit Product</h1>

				{mutation.isLoading && <Loader />}
				{mutation.error && (
					<Message variant="danger">
						{mutation.error.response.data.detail}
					</Message>
				)}
				{getUserError ? (
					<Message variant="danger">
						{error.response.data.detail}
					</Message>
				) : userLoading ? (
					<Loader />
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group controlId="name">
							<Form.Label>Name of Product</Form.Label>
							<Form.Control
								type="name"
								placeholder="Enter Product Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group controlId="price">
							<Form.Label> Price</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter Price"
								value={price}
								onChange={(e) => setPrice(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group controlId="image">
							<Form.Label>Image</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter image"
								value={image}
								onChange={(e) => setImage(e.target.value)}
							></Form.Control>
							<Form.Control
								type="file"
								onChange={uploadFileHandler}
							/>
							{uploading && <Loader />}
						</Form.Group>
						<Form.Group controlId="brand">
							<Form.Label>Brand</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Brand"
								value={brand}
								onChange={(e) => setBrand(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group controlId="countinstock">
							<Form.Label>Count In Stock</Form.Label>
							<Form.Control
								type="number"
								placeholder="Enter Count in stock"
								value={countInStock}
								onChange={(e) =>
									setCountInStock(e.target.value)
								}
							></Form.Control>
						</Form.Group>
						<Form.Group controlId="category">
							<Form.Label>Category</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Category"
								value={category}
								onChange={(e) => setCategory(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group controlId="description">
							<Form.Label>Description</Form.Label>
							<Form.Control
								as="textarea"
								type="text"
								placeholder="Enter Description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group>
							<Row>
								<Col>
									<Button type="submit" className="my-3">
										Update
									</Button>
								</Col>
								<Col className="d-flex justify-content-end align-items-center">
									<DeleteProductBtn
										id={id}
										refetch={null}
										navigatePath="/admin/productlist"
									/>
								</Col>
							</Row>
						</Form.Group>
					</Form>
				)}
			</FormContainer>
		</>
	);
}

export default ProductEditScreen;
