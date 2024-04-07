import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import { Button, Table, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { axiosClient } from "../axiosConfig";
import { setProductsData } from "../features/productsSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import Paginate from "../components/Paginate";
import DeleteProductBtn from "../components/DeleteProductBtn";
function ProductListScreen() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const pageParam = searchParams.get("page");
	const userInfo = useSelector((state) => state.userLogin.userInfo);
	const [idToDelete, setIdToDelete] = useState();

	const { data, error, isLoading, refetch } = useQuery(
		"proudctList",
		async () => {
			const response = await axiosClient.get(
				`/api/products?page=${pageParam}`,
				{
					headers: {
						"Content-type": "application/json",
					},
				}
			);
			return response.data;
		},
		{
			onSuccess: (data) => {
				dispatch(setProductsData(data.products));
			},
			onError: (error) => {
				console.log("error getting products: ", error);
			},
		}
	);

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
	}

	useEffect(() => {
		if (!userInfo || !userInfo.isAdmin) {
			navigate("/login");
		}
		refetch();
	}, [userInfo, pageParam]);

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
			{/* {deleteBtnLoading && <Loader />}
			{deleteBtnError && (
				<Message variant="danger">
					{deleteBtnError.response.data.detail}
				</Message>
			)} */}
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
				<>
					<Table
						striped
						bordered
						responsive
						hover
						className="table-sm"
					>
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
							{data.products.map((product) => (
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
										<DeleteProductBtn
											// TODO: somehow extract is loading/error data from here
											id={product._id}
											refetch={refetch}
										/>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<Paginate
						pages={data.pages}
						page={data.page}
						isAdmin={true}
					/>
				</>
			)}
		</>
	);
}

export default ProductListScreen;
