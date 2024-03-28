import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

import { axiosClient } from "../axiosConfig";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { Link, useNavigate, useParams } from "react-router-dom";

function UserEditScreen() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [isAdmin, setIsAdmin] = useState(false);
	const { id } = useParams();

	const navigate = useNavigate();
	const { userInfo } = useSelector((state) => state.userLogin);

	const { error: getUserError, isLoading: userLoading } = useQuery(
		"user",
		async () => {
			const response = await axiosClient.get(`/api/users/${id}/`, {
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${userInfo.token}`,
				},
			});
			return response.data;
		},
		{
			onSuccess: (data) => {
				setName(data.name);
				setEmail(data.email);
				setIsAdmin(data.isAdmin ? true : false);
			},
			onError: (error) => {
				console.log("Error getting user: ", error);
			},
		}
	);

	const mutation = useMutation(
		async () => {
			const response = await axiosClient.put(
				`/api/users/update/${id}/`,
				{
					name: name,
					email: email,
					isAdmin: isAdmin,
				},
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
				navigate("/admin/userlist");
			},
			onError: (error) => {
				console.log("User update error", error.response.data.detail);
			},
		}
	);

	function submitHandler(e) {
		e.preventDefault();
		mutation.mutate();
	}

	return (
		<>
			<Link to="/admin/userlist">Go Back</Link>
			<FormContainer>
				<h1>Edit User</h1>
				{mutation.isLoading && <Loader />}
				{mutation.error && (
					<Message variant="danger">
						{mutation.error.response.data.detail}
					</Message>
				)}
				{getUserError ? (
					<Message variant="danger">
						{error.response.data.detail}
					</Message>
				) : userLoading ? (
					<Loader />
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group controlId="name">
							<Form.Label>Username</Form.Label>
							<Form.Control
								type="name"
								placeholder="Enter Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group controlId="email">
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							></Form.Control>
						</Form.Group>
						<Form.Group controlId="isadmin">
							<Form.Label>Admin</Form.Label>
							<Form.Check
								type="checkbox"
								lable="Is Admin"
								checked={isAdmin}
								onChange={(e) => setIsAdmin(e.target.checked)}
							></Form.Check>
						</Form.Group>
						<Button type="submit" className="my-3">
							Update
						</Button>
					</Form>
				)}
			</FormContainer>
		</>
	);
}

export default UserEditScreen;
