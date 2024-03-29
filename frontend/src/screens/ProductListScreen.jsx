import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import { Button, Table, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { axiosClient } from "../axiosConfig";
import { setProducts } from "../features/getProductsSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function ProductListScreen() {
	const dispatch = useDispatch();
	const productsList = useSelector((state) => state.products.productsList);
	const navigate = useNavigate();
	const userInfo = useSelector((state) => state.userLogin.userInfo);
	const [idToDelete, setIdToDelete] = useState();
	const { error, isLoading, refetch } = useQuery(
		"proudctList",
		async () => {
			const response = await axiosClient.get("/api/products/", {
				headers: {
					"Content-type": "application/json",
				},
			});
			return response.data;
		},
		{
			onSuccess: (data) => {
				dispatch(setProducts(data));
			},
			onError: (error) => {
				// TODO: find out if get request is sent even if non auth user is redirected
				console.log("error getting products: ", error);
			},
		}
	);

	const mutation = useMutation(
		async () => {
			const response = await axiosClient.delete(
				`/api/products/delete/${idToDelete}/`,
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
				console.log("User deleted succesfully", data);
				setIdToDelete(null);
				refetch();
			},
			onError: (error) => {
				console.log("user deletion error", error);
			},
		}
	);
	const { error: deleteError } = mutation;

	useEffect(() => {
		if (!userInfo || !userInfo.isAdmin) {
			navigate("/login");
		}
		if (idToDelete) {
			mutation.mutate();
		}
	}, [userInfo, idToDelete]);

	function deleteHandler(id) {
		if (window.confirm("Are you sure you want to delete this product?")) {
			setIdToDelete(id);
		}
	}
	const createProductMutation = useMutation(
		async () => {
			const response = await axiosClient.post(
				"/api/products/create/",
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
				navigate(`/admin/product/${data._id}/edit`);
				refetch();
			},
			onError: (error) => {
				console.log("Product Creation error", error);
			},
		}
	);

	function createProductHandler(product) {
		createProductMutation.mutate();
		console.log("create");
	}

	return (
		<>
			<Row className="align-items-center">
				<Col>
					<h1>Products</h1>
				</Col>
				<Col className="text-end">
					<Button className="my-3" onClick={createProductHandler}>
						<i className="fas fa-plus"></i> Create Product
					</Button>
				</Col>
			</Row>
			{mutation.isLoading && <Loader />}
			{mutation.error && (
				<Message variant="danger">
					{mutation.error.response.data.detail}
				</Message>
			)}
			{createProductMutation.isLoading && <Loader />}
			{createProductMutation.error && (
				<Message variant="danger">
					{createProductMutation.error.response.data.detail}
				</Message>
			)}
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error.response.data.detail}</Message>
			) : (
				<Table striped bordered responsive hover className="table-sm">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Price</th>
							<th>Category</th>
							<th>Brand</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{productsList.map((product) => (
							<tr key={product._id}>
								<td>{product._id}</td>
								<td>{product.name}</td>
								<td>${product.price}</td>
								<td>{product.category}</td>
								<td>{product.brand}</td>
								<td className="text-end">
									<LinkContainer
										to={`/admin/product/${product._id}/edit`}
									>
										<Button
											variant="dark"
											className="btn-sm"
										>
											<i className="fas fa-edit"></i>
										</Button>
									</LinkContainer>
									<Button
										variant="danger"
										className="btn-sm mx-3"
										onClick={() =>
											deleteHandler(product._id)
										}
									>
										<i className="fas fa-trash"></i>
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</>
	);
}

export default ProductListScreen;
