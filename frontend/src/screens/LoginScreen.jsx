import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { axiosClient } from "../axiosConfig";
import { setLoginData } from "../features/userLoginSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

function LoginScreen() {
  const [email, setEmail] = useState("alex");
  const [password, setPassword] = useState("alex");
  const dispatch = useDispatch();
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
        dispatch(setLoginData({ username: email, password: password }));
      },
      onError: (error) => {
        console.log("login error", error);
      },
    }
  );

  function handleSubmit() {
    mutation.mutate();
  }

  return (
    <div>
      <h1>Login</h1>
      {mutation.isLoading ? (
        <Loader />
      ) : mutation.isError ? (
        <Message variant="danger">error</Message>
      ) : (
        <Button onClick={handleSubmit}>Submit</Button>
      )}
    </div>
  );
}

export default LoginScreen;
