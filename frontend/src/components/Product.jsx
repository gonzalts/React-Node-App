import { useState, useEffect } from 'react'
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import '../App.css';

const ProductList = () => {
    const [products, setProduct] = useState([]);
 
    useEffect(() => {
        getProducts();
    }, []);
 
    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProduct(response.data);
    }

    return (
        <div>
            <div className="table is-striped is-fullwidth">
                <Container className="d-flex justify-content-center align-items-center h-100">
                    <Row className="align-items-stretch">
                        { products.map((product, index) => (
                            <Col className="col-md-4" key={product.id}>
                                <Card class-Name="hover-shadow">
                                    <Card.Img className="cusCardImg" src={ product.image }></Card.Img>
                                    <Card.Body className="customCard text-light">  
                                        <Card.Title>{ product.title }</Card.Title>  
                                        <Card.Text>${ product.price }</Card.Text>
                                        <Card.Text>{ product.description }</Card.Text>
                                    </Card.Body>  
                                </Card> 
                            </Col>
                        )) }
                    </Row>
                </Container>
            </div>
        </div>
    )
}
 
export default ProductList