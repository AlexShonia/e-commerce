import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { axiosClient } from "../axiosConfig";
import { Register } from "../features/authSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { useSearchParams, Link, useNavigate } from "react-router-dom";

function LoginScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const redirect = searchParams.has("redirect")
    ? searchParams.get("redirect")
    : "/";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const { userInfo } = useSelector((state) => state.userLogin);

  const mutation = useMutation(
    async () => {
      const response = await axiosClient.post(
        "/api/users/register/",
        {
          name: name,
          email: email,
          password: password,
        },
        config
      );
      return response.data;
    },
    {
      onSuccess: (data) => {
        dispatch(Register(data));
      },
      onError: (error) => {
        console.log("Login error", error.response.data.detail);
      },
    }
  );
  const { error } = mutation;

  function submitHandler(e) {
    e.preventDefault();
    if (password != confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      mutation.mutate();
    }
  }

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [mutation]);

  return (
    <FormContainer>
      <h1>Register</h1>
      {error && (
        <Message variant="danger">{error.response.data.detail}</Message>
      )}
      {mutation.isLoading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="passwordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        {message ? <Message variant="danger">{message}</Message> : ""}
        <Button type="submit" className="my-3">Register</Button>
      </Form>
      <Row className="py-3">
        <Col>
          Already Have an Account?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Sign In
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default LoginScreen;
