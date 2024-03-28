import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Button, Table, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { axiosClient } from "../axiosConfig";
import { getUserList } from "../features/authSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function UserListScreen() {
	const dispatch = useDispatch();
	const userList = useSelector((state) => state.userLogin.userList);
	const navigate = useNavigate();
	const userInfo = useSelector((state) => state.userLogin.userInfo);
	const { error, isLoading, refetch } = useQuery(
		"userList",
		async () => {
			const response = await axiosClient.get("/api/users/", {
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${userInfo.token}`,
				},
			});
			return response.data;
		},
		{
			onSuccess: (data) => {
				dispatch(getUserList(data));
			},
			onError: (error) => {
				// TODO: find out if get request is sent even if non auth user is redirected
				console.log("error getting users: ", error);
			},
		}
	);
	useEffect(() => {
		if (!userInfo || !userInfo.isAdmin) {
			navigate("/login");
		}
	}, [userInfo]);

	function deleteHandler(id) {
		console.log(id);
	}
	return (
		<>
			<h2>Users</h2>
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
							<th>Email</th>
							<th>Admin</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{userList.map((user) => (
							<tr key={user._id}>
								<td>{user._id}</td>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>
									{user.isAdmin ? (
										<i
											className="fas fa-check"
											style={{ color: "green" }}
										></i>
									) : (
										<i
											class="fas fa-xmark"
											style={{ color: "red" }}
										></i>
									)}
								</td>
								<td>
									<LinkContainer
										to={`/admin/user/${user._id}`}
									>
										<Button
											// TODO: change variant to something more visible
											variant="dark"
											className="btn-sm"
										>
											<i className="fas fa-edit"></i>
										</Button>
									</LinkContainer>
									<Button
										variant="danger"
										className="btn-sm mx-3"
										onClick={() => deleteHandler(user._id)}
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

export default UserListScreen;
