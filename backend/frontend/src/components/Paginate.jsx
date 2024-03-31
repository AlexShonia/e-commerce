import React from "react";
import { Pagination } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

function Paginate({ pages, page, keyword = "", isAdmin = false }) {
	const navigate = useNavigate();
	function clickHandler(x) {
		if (isAdmin) {
			navigate(`/admin/productlist/?page=${x + 1}`);
		} else {
			navigate(`/?keyword=${keyword}&page=${x + 1}`);
		}
	}
	return (
		pages > 1 && (
			<Pagination>
				{[...Array(pages).keys()].map((x) => (
					<Pagination.Item
						onClick={() => clickHandler(x)}
						key={x + 1}
						active={x + 1 === Number(page)}
					>
						{x + 1}
                        {console.log("page: ", page)}
					</Pagination.Item>
				))}
			</Pagination>
		)
	);
}

export default Paginate;
