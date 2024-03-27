import React, { useEffect, useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../features/cartSlice";
import { axiosClient } from "../axiosConfig";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { useSearchParams, Link, useNavigate } from "react-router-dom";

function PaymentScreen() {
	const shippingAddress = useSelector((state) => state.cart.shippingAddress);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [paymentMethod, setPaymentMethod] = useState("PayPal");

	if (!shippingAddress.address) {
		navigate("/shipping");
	}

	function submitHandler(e) {
		e.preventDefault;
		dispatch(savePaymentMethod(paymentMethod));
		navigate("/placeorder");
	}
	return (
		<FormContainer>
			<CheckoutSteps step1 step2 step3 />
			<Form onSubmit={submitHandler}>
				<Form.Group>
					<Form.Label as="legend">Select Method</Form.Label>
					<Col>
						<Form.Check
							checked
							type="radio"
							label="PayPal or Credit Card"
							id="paypal"
							name="paymentMethod"
							onChange={(e) => setPaymentMethod(e.target.value)}
						></Form.Check>
					</Col>
				</Form.Group>
				<Button type="submit" className="my-3">
					Continue
				</Button>
			</Form>
		</FormContainer>
	);
}

export default PaymentScreen;
