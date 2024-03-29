import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useQuery } from "react-query";
import { axiosClient } from "../axiosConfig";
import { setProducts } from "../features/getProductsSlice";
import { useSearchParams } from "react-router-dom";
function HomeScreen() {
	const {
		data: products,
		isLoading,
		error,
		refetch,
	} = useQuery("products", async () => {
		const response = await axiosClient.get(
			`/api/products?keyword=${keyword}`
		);
		return response.data;
	});

	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();
	const keyword = searchParams.get("keyword");

	useEffect(() => {
		if (products) {
			dispatch(setProducts(products));
		}
		refetch();
	}, [dispatch, products, keyword]);

	return (
		<div>
			<h1>Latest Products</h1>

			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</div>
	);
}

export default HomeScreen;
