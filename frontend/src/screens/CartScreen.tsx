import { useDispatch, useSelector } from "react-redux";
import { cartAddItem, cartRemoveItem } from "../features/cartSlice";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Message from "../components/Message";

import {
  Row,
  Col,
  Image,
  Button,
  ListGroup,
  Form,
  Card,
} from "react-bootstrap";

function CartScreen() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const qty = searchParams.get("qty");

  let cartItems = useSelector((state) => state.cart.cart);
  let products = useSelector((state) => state.products.productsList);

  let updatedCartItems;
  let includes = false;
  useEffect(() => {
    let updatedCartItems = JSON.parse(JSON.stringify(cartItems));
    for (let i = 0; i < updatedCartItems.length; i++) {
      if (id == updatedCartItems[i].id) {
        updatedCartItems[i].qty = qty;
        dispatch(cartAddItem(updatedCartItems));
        includes = true;
        break;
      }
    }
    if (!includes) {
      updatedCartItems = [...cartItems, { id: id, qty: qty }];
      dispatch(cartAddItem(updatedCartItems));
    }
  }, [id, qty]);

  function getItemById(id) {
    return products.find((item) => item._id === id);
  }

  function removeFromCart(idx) {
    updatedCartItems = [...cartItems];

    for (let i = 0; i < updatedCartItems.length; i++) {
      if (idx == updatedCartItems[i].id) {
        console.log("mhm");

        updatedCartItems.splice(i, 1);
        dispatch(cartAddItem(updatedCartItems));
      }
    }
  }

  return (
    <>
      {cartItems.map((i) => {
        const item = getItemById(parseInt(i.id));
        const imageURL = item ? item.image : "";
        const name = item ? item.name : "";

        return (
          <Row key={i.id}>
            <Col>
              <Image src={imageURL} fluid /> {/* Use the imageURL as src */}
            </Col>
            <Col>{name}</Col>
            <Col>quantity: {i.qty}</Col>
            <Col>
              <button onClick={() => removeFromCart(parseInt(i.id))}>
                remove
              </button>
            </Col>
          </Row>
        );
      })}
    </>
  );
}

export default CartScreen;
