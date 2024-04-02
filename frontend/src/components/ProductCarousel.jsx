import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { useQuery } from "react-query";
import { axiosClient } from "../axiosConfig";
import axios from "axios";

function ProductCarousel() {
	const { data, isLoading, error } = useQuery(
		"productsTop",
		async () => {
			const response = await axiosClient.get("/api/products/top/");
			return response.data;
		},
		{
			onError: (error) => {
				console.log("error getting top items", error);
			},
		}
	);

	return isLoading ? (
		<Loader />
	) : error ? (
		<Message variant="danger">{error.response.data.detail}</Message>
	) : data ? (
		<Carousel pause="hover" className="bg-dark">
			{data.map((product) => (
				<Carousel.Item key={product._id}>
					<Link to={`/product/${product._id}`}>
						<Image src={import.meta.env.VITE_IMG_PREFIX + product.image} alt={product.name} fluid />
						<Carousel.Caption className="carousel.caption">
							<h4>
								{product.name} (${product.price})
							</h4>
						</Carousel.Caption>
					</Link>
				</Carousel.Item>
			))}
		</Carousel>
	) : (
		""
	);
}

export default ProductCarousel;
