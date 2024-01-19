import React, { useState } from "react";
import {
    Button,
    Form,
    FormControl,
    Row,
    Col,
    Container,
} from "react-bootstrap";
import PropTypes from "prop-types";
import "@/pages/pages_css/SignUp.css";
import CompanySignUpController from "@/pages/pages_controllers/ExpertSignUp_Controller";

export const CompanySignUp = ({ handleToCompanyLogin }) => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };


    const {
        selectedTypesApproach,
        selectedTypesSoort,
        selectedTypesType,
        handleTypeChange,
        handleSoortChange,
        handleApproachChange,
        handleRemoveType,
        handleAgeChange,
        showAdditionalBoxes,
    } = CompanySignUpController();

    return (
        <body className="achtergrond" style={{ display: 'grid', placeItems: 'center' }}>
            <Container fluid id="signup-form" className="w-50 p-5">
                <h1>Account aanmaken</h1>
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    <Row>
                        <Form.Group as={Col} controlId="username" className="mt-3">
                            <Form.Label>Gebruikersnaam:</Form.Label>
                            <Form.Control type="text" required />
                            <Form.Control.Feedback type="invalid">
                                Vul uw gebruikersnaam in.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">
                                Ziet er goed uit!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="password" className="mt-3">
                            <Form.Label>Wachtwoord:</Form.Label>
                            <Form.Control type="password" required />
                            <Form.Control.Feedback type="invalid">
                                Vul uw wachtwoord in.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">
                                Ziet er goed uit!
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    
                    <Form.Group as={Col} controlId="bedrijfnaam" className="mt-3">
                        <Form.Label>Bedrijfsnaam:</Form.Label>
                        <Form.Control type="text" required />
                        <Form.Control.Feedback type="invalid">
                            Vul uw bedrijfsnaam in.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="valid">
                            Ziet er goed uit!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="voorletter" className="mt-3">
                        <Form.Label>Beschrijving bedrijf:</Form.Label>
                        <Form.Control type="text" required />
                        <Form.Control.Feedback type="invalid">
                            Vul een beschrijving van het bedrijf in.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="valid">
                            Ziet er goed uit!
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Group controlId="postcode" className="mt-3">
                        <Form.Label>Locatie bedrijf:</Form.Label>
                        <Form.Control type="text" required />
                        <Form.Control.Feedback type="invalid">
                            Vul een geldige Locatie in.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="valid">
                            Ziet er goed uit!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="postcode" className="mt-3">
                        <Form.Label>Link bedrijf:</Form.Label>
                        <Form.Control type="text" required />
                        <Form.Control.Feedback type="invalid">
                            Vul een geldige Link in.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="valid">
                            Ziet er goed uit!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="email" className="mt-3">
                        <Form.Label>KVK-nummer:</Form.Label>
                        <Form.Control type="text" required />
                        <Form.Control.Feedback type="invalid">
                            Vul een geldig KVK-nummer in.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="valid">
                            Ziet er goed uit!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="nummer" className="mt-3">
                        <Form.Label>Contact persoon:</Form.Label>
                        <Form.Control type="text" required />
                        <Form.Control.Feedback type="invalid">
                            Vul een geldig naam in.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="valid">
                            Ziet er goed uit!
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Row>
                        <Form.Group as={Col} controlId="username" className="mt-3">
                            <Form.Label>Email-adres:</Form.Label>
                            <Form.Control type="text" required />
                            <Form.Control.Feedback type="invalid">
                                Vul uw email-adres in.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">
                                Ziet er goed uit!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="nummer" className="mt-3">
                            <Form.Label>Telefoonnummer:</Form.Label>
                            <Form.Control type="text" 
                            required 
                            pattern="[0-9]{10}"
                            maxLength={10}
                            />
                            <Form.Control.Feedback type="invalid">
                                Vul uw telefoonnummer in.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">
                                Ziet er goed uit!
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit" className="w-100 mt-3">
                        Maak account
                    </Button>

                    <p className="p-2 mt-3">Heeft u al een account?</p>

                    <Button
                        onClick={handleToCompanyLogin}
                        variant="success"
                        type="submit"
                        size="sm"
                        className="mt-3 text-left"
                    >
                        Log hier in
                    </Button>
                </Form>
            </Container>
        </body>
    );
};

CompanySignUp.propTypes = {
    handleToLogin: PropTypes.func.isRequired,
    handleToExpertPortal: PropTypes.func.isRequired,
};

export default CompanySignUp;