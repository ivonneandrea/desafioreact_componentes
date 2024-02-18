
import { useState } from 'react';


import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = ({ setAlert }) => {
  
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [confirmaContrasena, setConfirmaContrasena] = useState("");


    const validateData = (e) => {
        e.preventDefault();

        const validateFormGroups =
            !nombre|| !email || !contrasena || !confirmaContrasena;
        const validatePassword = contrasena !== confirmaContrasena;

        validateFormGroups
            ? setAlert({
                  error: true,
                  msg: "Completa todos los campos",
                  color: "danger",
              })
            : setAlert({
                  error: false,
                  msg: "Has iniciado sesión correctamente",
                  color: "success",
              });

        if (validatePassword) {
            setAlert({
                error: true,
                msg: "Passwords doesn't match",
                color: "warning",
            });
            return;
        }

        setNombre("");
        setEmail("");
        setContrasena("");
        setConfirmaContrasena("");
    };

    return (
        <>
            <form className="registerForm" onSubmit={validateData}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="yourmail@mail.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        onChange={(e) => setContrasena(e.target.value)}
                        value={contrasena}
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicConfirmPassword">
                    <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirma Contraseña"
                        onChange={(e) => setConfirmaContrasena(e.target.value)}
                        value={confirmaContrasena}
                    />
                </Form.Group>
                <Button
                    variant="warning"
                    size="lg"
                    type="submit"
                    className="m-2 fw-bold submitBtn">
                    Registrate
                </Button>
            </form>
        </>
    );
};

export default Formulario;


