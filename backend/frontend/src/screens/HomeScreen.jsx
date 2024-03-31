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
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
function HomeScreen() {
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();
	const keyword = searchParams.get("keyword");
	const pageParam = searchParams.get("page");

	const { data, isLoading, error, refetch } = useQuery(
		"products",
		async () => {
			const response = await axiosClient.get(
				`/api/products?keyword=${keyword}&page=${pageParam}`
			);
			return response.data;
		}
	);

	useEffect(() => {
		//  TODO: understand why data.products was a problem (undefined)
		if (data) {
			dispatch(setProducts(data.products));
		}
		refetch();
	}, [dispatch, data, keyword, pageParam]);

	return (
		<div>
			{!keyword && <ProductCarousel />}

			<h1>Latest Products</h1>

			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error.response.data.detail}</Message>
			) : data.products ? (
				<>
					<Row>
						{data.products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
					<Paginate
						pages={data.pages}
						page={data.page}
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
