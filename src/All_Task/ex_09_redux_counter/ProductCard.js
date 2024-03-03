import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductData, ProductDataDelete } from "../Redux/action/productAction";
import { Button, Card, Col, Row, Stack } from "react-bootstrap";
import "./ProductCard.css";

export default function ProductCard() {
  const data = useSelector(y => y.product);
  const dispatch = useDispatch();
  console.log(data);

  const dlt = index => {
    dispatch(ProductDataDelete(index));
  };

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(y => {
      // console.log(y);
      dispatch(ProductData(y.data));
    });
  }, []);
  // console.log(data);
  return (
    <>
      <Row className="align-items-stretch">
        {data.map((element, index) => {
          return (
            <Col md={3}>
              <Card key={index}>
                <Stack className="product-img-wraper">
                  <Card.Img src={element.image} className="product-image" />
                </Stack>
                <Card.Text>{element.title} </Card.Text>
                <Card.Text>Price: {element.price} Rs.</Card.Text>

                <Button
                  variant="warning"
                  className="mb-2"
                  onClick={() => dlt(index)}
                >
                  Add to card
                </Button>
                <Button variant="primary" onClick={() => dlt(index)}>
                  Delete
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
