import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../App.css';
 
const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
 
    const saveProduct = async (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        } else {
            await axios.post('http://localhost:5000/products',{
                title: title,
                price: price,
                description: description,
                image: image
            }); 

            navigate('/productos');
        }

        setValidated(true);   
    }
 
    return (
        <div className="sum-prod d-flex justify-content-center">
            <Form noValidate validated={validated} onSubmit={ saveProduct }>
                <div className="field">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Título"
                        className="mb-3"
                    >
                    <Form.Control
                        required
                        className="input"
                        type="text"
                        placeholder="Title"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                    <Form.Control.Feedback type="invalid">Ingrese un Título</Form.Control.Feedback>
                    </FloatingLabel>
                </div>
 
                <div className="field">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Precio"
                        className="mb-3"
                    >
                    <Form.Control
                        required
                        className="input"
                        type="number"
                        placeholder="Price"
                        value={ price }
                        onChange={ (e) => setPrice(e.target.value) }
                    />
                    <Form.Control.Feedback type="invalid">Ingrese un Precio</Form.Control.Feedback>
                    </FloatingLabel>
                </div>

                <div className="field">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Descripción"
                        className="mb-3"
                    >
                    <Form.Control
                        required
                        as="textarea"
                        placeholder="description"
                        value={ description }
                        onChange={ (e) => setDescription(e.target.value) }
                    />
                    <Form.Control.Feedback type="invalid">Ingrese una Descripción</Form.Control.Feedback>
                    </FloatingLabel>
                </div>

                <div className="field">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Imagen"
                        className="mb-3"
                    >
                    <Form.Control
                        required
                        className="input"
                        type="text"
                        placeholder="image"
                        value={ image }
                        onChange={ (e) => setImage(e.target.value) }
                    />
                    <Form.Control.Feedback type="invalid">Ingrese una Imagen</Form.Control.Feedback>
                    </FloatingLabel>
                </div>

                <div className="field">
                    <Button variant="primary" type="submit">Guardar</Button>
                </div>
            </Form>
        </div>
    )
}
 
export default AddProduct