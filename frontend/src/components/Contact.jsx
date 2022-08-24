import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../App.css';
 
const AddContact = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
 
    const saveContact = async (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            await axios.post('http://localhost:5000/contact',{
                name: name,
                lastname: lastname,
                email: email,
                subject: subject,
                message: message
            });

            navigate('/productos');
        }
      
        setValidated(true); 
    }
    
    return (
        <div className="sum-prod col-lg-4 offset-md-4 justify-content-center">
            <Form noValidate validated={validated} onSubmit={ saveContact }>
                <div className="field col-lg-4 offset-md-4">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Nombre"
                        className="mb-3"
                    >
                    <Form.Control
                        required
                        className="input"
                        type="text"
                        placeholder="name"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                    <Form.Control.Feedback type="invalid">Ingrese su Nombre</Form.Control.Feedback>
                    </FloatingLabel>
                </div>

                <div className="field col-lg-6 offset-md-3">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Apellido"
                        className="mb-3"
                    >
                    <Form.Control
                        required
                        className="input"
                        type="text"
                        placeholder="Lastname"
                        value={ lastname }
                        onChange={ (e) => setLastname(e.target.value) }
                    />
                    <Form.Control.Feedback type="invalid">Ingrese su Apellido</Form.Control.Feedback>
                    </FloatingLabel>
                </div>

                <div className="field col-lg-8 offset-md-2">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-3"
                    >
                    <Form.Control
                        required
                        className="input"
                        type="text"
                        placeholder="Email"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                    <Form.Control.Feedback type="invalid">Ingrese un email</Form.Control.Feedback>
                    </FloatingLabel>
                </div>

                <div className="field col-lg-10 offset-md-1">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Asunto"
                        className="mb-3"
                    >
                    <Form.Control
                        required
                        className="input"
                        type="text"
                        placeholder="subject"
                        value={ subject }
                        onChange={ (e) => setSubject(e.target.value) }
                    />
                    <Form.Control.Feedback type="invalid">Complete el Asunto</Form.Control.Feedback>
                    </FloatingLabel>
                </div>

                <div className="field">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Mensaje"
                        className="mb-3"
                    >
                    <Form.Control
                        required
                        as="textarea"
                        rows="3"
                        placeholder="Message"
                        value={ message }
                        onChange={ (e) => setMessage(e.target.value) }
                    />
                    <Form.Control.Feedback type="invalid">Complete el mensaje.</Form.Control.Feedback>
                    </FloatingLabel>
                </div>

                <div className="field">
                    <Button variant="primary" type="submit">Guardar</Button>
                </div>
            </Form>
        </div>
    )
}
 
export default AddContact