import React, { useState } from 'react';
import { Form, FormControl, Button, Container } from 'react-bootstrap';
import NavbarComponent from "./components/NavbarComponent";
import "@/pages/pages_css/AssignmentCreator.css";

const AssignmentCreator = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <body className="achtergrond" style={{ display: 'grid', placeItems: 'center' }}>
        <Container fluid id="assignment-creator" className="w-50 p-5">
        <h1>Opdracht aanmaken</h1>
        <NavbarComponent portalType="expert" />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formAssignmentTitle">
                    <Form.Label>Titel</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="Voer een titel in..." required />
                    <Form.Control.Feedback type="invalid">Vul alstublieft een titel in.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAssignmentDescription">
                    <Form.Label>Beschrijving</Form.Label>
                    <FormControl
                        type="text" placeholder="Voer een beschrijving in..." required />
                    <Form.Control.Feedback type="invalid">Vul alstublieft een beschrijving voor uw opdracht in.</Form.Control.Feedback>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formAssignmentLocation">
                    <Form.Label>Locatie</Form.Label>
                    <FormControl type="text"
                        placeholder="Voer een locatie in..." required />
                    <Form.Control.Feedback type="invalid">Vul alstublieft een locatie in.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAssignmentReward">
                    <Form.Label>Beloning</Form.Label>
                    <FormControl type="text" placeholder="Beloning" required />
                    <Form.Control.Feedback type="invalid">Vul alstublieft een beloning voor het onderzoek in.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAssignmentOptions">
                    <Form.Label>Beperking</Form.Label>
                    <FormControl as="select" required>
                        <option value=""    >Kies een beperking</option>
                        <option value="option1">Blind</option>
                        <option value="option2">Doof</option>
                        <option value="option3">ADHD</option>
                    </FormControl>
                    <Form.Control.Feedback type="invalid">Vul alstublieft een beperking in.</Form.Control.Feedback>
                </Form.Group>

                <Button variant="success" type="submit" className="Knop">
                    Bevestig
                </Button>
            </Form>
            </Container>
        </body>
    );
};

export default AssignmentCreator;
