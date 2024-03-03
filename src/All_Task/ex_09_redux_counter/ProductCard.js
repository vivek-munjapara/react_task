import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductData, ProductDataAdd, ProductDataDelete } from "../Redux/action/productAction";
import { Button, Card, Col, Row, Stack } from "react-bootstrap";
import "./ProductCard.css";

export default function ProductCard() {
  const ProductDataList = useSelector(y => y.product);
  const dispatch = useDispatch();
  

  const add = index => {
    dispatch(ProductDataAdd(index));
  };
  const dlt = index => {
    dispatch(ProductDataDelete(index));
  };

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(y => {
      dispatch(ProductData(y.data));
    });
  }, []);
  // console.log(data);
  return (
    <>
      <Row className="align-items-stretch mt-4">
        {ProductDataList.map((element, index) => {
          return (
            <Col md={3} key={index}>
              <Card>
                <Stack className="product-img-wraper">
                  <Card.Img src={element.image} className="product-image" />
                </Stack>
                <Card.Text>{element.title} </Card.Text>
                <Card.Text>Price: {element.price} Rs.</Card.Text>

                <Button
                  variant="warning"
                  className="mb-2"
                  onClick={() => add(index)}
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
