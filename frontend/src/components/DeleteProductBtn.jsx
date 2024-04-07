import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { Button } from "react-bootstrap";
import { axiosClient } from "../axiosConfig";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function DeleteProductBtn({
	id,
	refetch,
	setDeleteBtnError,
	setDeleteBtnLoading,
	navigatePath,
	style,
}) {
	const userInfo = useSelector((state) => state.userLogin.userInfo);
	const navigate = useNavigate();
	const mutation = useMutation(
		async () => {
			const response = await axiosClient.delete(
				`/api/products/delete/${id}/`,
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
				if (refetch) {
					refetch();
				}
				navigate(navigatePath);
			},
			onError: (error) => {
				console.log("user deletion error", error);
			},
		}
	);

	function deleteHandler() {
		if (window.confirm("Are you sure you want to delete this product?")) {
			mutation.mutate();
		}
	}

	return (
		<Button
			style={style}
			variant="danger"
			className="btn-sm ms-3"
			onClick={() => deleteHandler()}
            >
			<i className="fas fa-trash"></i>
		</Button>
	);
}

export default DeleteProductBtn;
