import React, { useState } from "react";
import { Container, Image, Form, FormControl, Button, Row, Col, Modal } from 'react-bootstrap';
import PropTypes from "prop-types";
import NavbarComponent from "./components/NavbarComponent";
import "@/pages/pages_css/ExpertProfiel.css";

const ExpertProfiel = ({ handleToExpertPortal }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <body className="achtergrond">
            <Container fluid id="profile-form" className="w-50 p-5">
                <NavbarComponent portalType="expert" />

                <div className="text-center">
                    <Image src="./icons/kou_logo.png" rounded />
                </div>
                <Form>
                    <Row className="mb-3 mt-3"> 
                        <Form.Group as={Col} controlId="formProfileName">
                    <Form.Label>Voorletters</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="M."
                    />
                    </Form.Group>
            
                        <Form.Group as={Col} controlId="formProfileSurname">
                    <Form.Label>Achternaam</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="Gunus"
                    />
                        </Form.Group>
                </Row>

                    <Form.Group className="mb-3" controlId="formProfilePostalcode">
                    <Form.Label>Postcode</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="4206GG"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfileAge">
                    <Form.Label>Leeftijdscategorie</Form.Label>
                    <FormControl as="select" required>
                        <option value=""></option>
                        <option value="option1">Onder de 18</option>
                        <option value="option2">18-30</option>
                        <option value="option3">31-45</option>
                        <option value="option4">45+</option>
                    </FormControl>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfileEmail">
                    <Form.Label>E-Mail adres</Form.Label>
                    <FormControl
                        type="email"
                        placeholder="MGunus@gmail.com"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfilePhoneNumber">
                    <Form.Label>Telefoonnummer</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="06 12345678"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfileContactMethod">
                    <Form.Label>Contactmethode</Form.Label>
                    <FormControl as="select" required>
                        <option value=""></option>
                        <option value="option1">Telefonisch</option>
                        <option value="option2">E-Mail</option>
                    </FormControl>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfileOptions">
                    <Form.Label>Beperking</Form.Label>
                    <FormControl as="select" required>
                        <option value="">Kies een beperking</option>
                        <option value="option1">Optie1</option>
                        <option value="option2">Optie2</option>
                        <option value="option3">Optie3</option>
                    </FormControl>
                </Form.Group>


                <Button variant="success" type="submit" className="me-3">
                    Bevestig
                </Button>


                    <Button variant="danger" type="button" className="Knop" onClick={handleShow}>
                        Verwijder Account
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Verwijder Account</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Weet u zeker dat u uw account wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Annuleren
                            </Button>
                            <Button variant="danger" onClick={handleClose}>
                                Verwijderen
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </Container>
        </body>
    );
};

ExpertProfiel.propTypes = {
    handleToExpertPortal: PropTypes.func.isRequired,
};

export default ExpertProfiel;
