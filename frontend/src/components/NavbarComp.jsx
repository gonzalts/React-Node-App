import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import Product from "./Product";
import Home from "./Home";
import AddContact from "./Contact";
import Logo from '../assets/pngegg.png';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="/">
                            <img width="30px" height="auto" src={Logo} alc="github"/>
                            </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="../">Home</Nav.Link>
                                <Nav.Link as={Link} to="../productos">Productos</Nav.Link>
                                <Nav.Link as={Link} to="../productos/add">Cargar Producto</Nav.Link>
                                <Nav.Link as={Link} to="../productos/list">Editar Productos</Nav.Link>     
                                <Nav.Link as={Link} to="../contact">Contacto</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className="body-content">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/productos" element={<Product />}></Route>
                        <Route path="/productos/list" element={<ProductList />}></Route>
                        <Route path="/productos/add" element={<AddProduct />}></Route>
                        <Route path="/productos/edit/:id" element={<EditProduct />}></Route>
                        <Route path="/contact" element={<AddContact />}></Route>
                    </Routes>
                </div>
            </Router>
        )
    }
}