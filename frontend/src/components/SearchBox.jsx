import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

function SearchBox() {
	const [keyword, setKeyword] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	function submitHandler(e) {
		e.preventDefault();
		if (keyword) {
			navigate(`/?keyword=${keyword}&page=1`);
		} else {
			navigate(location.pathname);
		}
	}
	return (
		<Form onSubmit={submitHandler} className="d-flex">
			<Form.Control
				type="text"
				name="q"
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
				className="mr-sm-2 ml-sm-5"
				style={{ color: "black" }}
			></Form.Control>
			<Button
				type="submit"
				variant="outline-info"
				className="p-2 px-4 mx-3"
			>
				Submit
			</Button>
		</Form>
	);
}

export default SearchBox;
