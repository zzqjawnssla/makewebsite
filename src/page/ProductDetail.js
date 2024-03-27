import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from "react-bootstrap/Button";

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);

    const getDetail = async () => {
        // let url = `http://localhost:5000/products/${id}`;
        let url = `https://my-json-server.typicode.com/OJEONGYEON/makewebsite/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);

    }
    useEffect(() => {
        getDetail();
    })
    
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <img src={product?.img} alt=""/>
                    </Col>
                    <Col>
                        <div className="detail-style">{product?.title}</div>
                        <div className="detail-style">{product?.price}</div>
                        <div className="detail-style">{product?.info}</div>
                        <div className="detail-style">
                          <DropdownButton
                            as={ButtonGroup}
                            id={`dropdown-variants-size`}
                            title="사이즈 선택"
                          >
                            {product?.size.map((size, index) => (
                              <Dropdown.Item key={index} eventKey={index}>{size}</Dropdown.Item>
                            ))}
                          </DropdownButton>
                        </div>
                        <Button variant="dark" className="button-width">추가</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProductDetail;