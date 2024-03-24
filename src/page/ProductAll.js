import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import {Container, Col, Row} from "react-bootstrap";

const ProductAll = () => {
    const  [products, setProducts] = useState([]);
    const  getProducts = async () => {
        let url = "http://localhost:5000/products";
        let response = await fetch(url);
        let data = await response.json();
        setProducts(data);
    };
    useEffect(() => {
        getProducts();
    }, []);

  return (
    <div>
        <Container>
            <Row>
                {products.map((product) => (
                    <Col lg={3}><ProductCard item={product}/></Col>
                ))}
            </Row>
        </Container>
      <ProductCard />
    </div>
  );
}

export default ProductAll;
