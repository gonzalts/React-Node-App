import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const ProductList = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProduct(response.data);
    }

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`);
        getProducts();
    }

    return (
        <div>
            <Table responsive striped bordered hover variant="dark" className="table is-striped is-fullwidth text-light">
                <thead>
                    <tr>
                        <th>Orden</th>
                        <th>Título</th>
                        <th>Precio</th>
                        <th>Descripción</th>
                        <th>Imágen</th>
                        <th>Acciones</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { products.map((product, index) => (
                        <tr key={ product.id }>
                            <td>{ index + 1 }</td>
                            <td>{ product.title }</td>
                            <td>{ product.price }</td>
                            <td>{ product.description }</td>
                            <td>{ product.image }</td>
                            <td><Link className="link text-light" variant="link" to={`/productos/edit/${product.id}`}>Editar</Link></td>
                            <td><Button variant="danger" onClick={ () => deleteProduct(product.id) } className="button is-small is-danger">Eliminar</Button></td>
                        </tr>
                    )) }
                    
                </tbody>
            </Table>
        </div>
    )
}

export default ProductList