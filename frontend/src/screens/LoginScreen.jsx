import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { axiosClient } from "../axiosConfig";
import { setLoginData } from "../features/userLoginSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import {
  useSearchParams,
  Link,
  redirect,
  Navigate,
  useNavigate,
} from "react-router-dom";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.has("redirect")
    ? searchParams.get("redirect")
    : "/";
  const navigate = useNavigate();
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const mutation = useMutation(
    async () => {
      const response = await axiosClient.post(
        "/api/users/login/",
        {
          username: email,
          password: password,
        },
        config
      );
      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log("Login successful", data);
        dispatch(setLoginData(data));
        navigate(redirect);
      },
      onError: (error) => {
        console.log("Login error", error.response.data.detail);
      },
    }
  );

  function submitHandler(e) {
    e.preventDefault();
    mutation.mutate();
  }
  const { error } = mutation;

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant="danger">{error.response.data.detail}</Message>}
      {mutation.isLoading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Sign In</Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default LoginScreen;
