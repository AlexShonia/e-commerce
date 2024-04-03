import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Alert } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useQuery } from "react-query";
import { axiosClient } from "../axiosConfig";
import { setProductsData } from "../features/productsSlice";
import { useSearchParams } from "react-router-dom";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
function HomeScreen() {
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();
	const keyword = searchParams.get("keyword");
	const pageParam = searchParams.get("page");
	const productsData = useSelector((state) => state.products);
	const { page, pages, productsList } = productsData;

	const { isLoading, error, refetch } = useQuery(
		"products",
		async () => {
			const response = await axiosClient.get(
				`/api/products?keyword=${keyword}&page=${pageParam}`
			);
			return response.data;
		},
		{
			onSuccess: (data) => {
				dispatch(setProductsData(data));
			},
			onError: (error) => {
				console.log(
					"error fetching products: ",
					error.response.data.detail
				);
			},
		}
	);

	useEffect(() => {
		//  TODO: understand why data.products was a problem (undefined)
		refetch();
	}, [keyword, pageParam]);

	return (
		<div>
			<Alert variant="info" className="text-center">
				This is a Portfolio website
			</Alert>
			{!keyword && <ProductCarousel />}

			<h1>All Products</h1>

			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error.response.data.detail}</Message>
			) : productsList ? (
				<>
					<Row>
						{productsList.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
					<Paginate
						pages={pages}
						page={page}
						keyword={keyword}
					></Paginate>
				</>
			) : (
				""
			)}
		</div>
	);
}

export default HomeScreen;
