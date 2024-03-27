import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import {Container, Col, Row} from "react-bootstrap";
import {useSearchParams} from "react-router-dom";

const ProductAll = () => {
    let  [products, setProducts] = useState([]);
    const [query, setQuery] = useSearchParams();

    const  getProducts = async () => {
        let searchQuery = query.get("q") || "";
        // let url = `http://localhost:5000/products?q=${searchQuery}`;
        let url = `https://my-json-server.typicode.com/OJEONGYEON/makewebsite/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProducts(data);
    };
    useEffect(() => {
        getProducts();
    }, [query]);  /* 쿼리 값이 바뀔때마다 useEffect 실행 */

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
