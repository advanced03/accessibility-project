import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  Row,
  Col,
    Container,
  Modal
} from "react-bootstrap";
import PropTypes from "prop-types";
import "@/pages/pages_css/SignUp.css";
import ExpertSignUpController from "@/pages/pages_controllers/ExpertSignUp_Controller";

export const ExpertSignUp = ({ handleToLogin, handleToExpertPortal }) => {
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
  } = ExpertSignUpController();

    return (
      <body className="achtergrond" style={{ display: 'grid', placeItems: 'center' }}>
            <Container fluid id="signup-form" className="w-50 p-5">
      <h1>Account aanmaken</h1>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}>
        <Row>
                        <Form.Group as={Col} controlId="username" className="mt-3">
            <Form.Label>Gebruikersnaam:</Form.Label>
            <Form.Control type="text" name="username" required />
            <Form.Control.Feedback type="invalid">
              Vul uw gebruikersnaam in.
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              Ziet er goed uit!
            </Form.Control.Feedback>
          </Form.Group>

                        <Form.Group as={Col} controlId="password" className="mt-3">
            <Form.Label>Wachtwoord:</Form.Label>
            <Form.Control type="password" name="password" required />
            <Form.Control.Feedback type="invalid">
              Vul uw wachtwoord in.
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              Ziet er goed uit!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
                        <Form.Group as={Col} controlId="voorletter" className="mt-3">
            <Form.Label>Voorletter(s):</Form.Label>
            <Form.Control type="text" name="firstletter" required />
            <Form.Control.Feedback type="invalid">
              Vul uw wachtwoord in.
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              Ziet er goed uit!
            </Form.Control.Feedback>
          </Form.Group>

                        <Form.Group as={Col} controlId="achternaam" className="mt-3">
            <Form.Label>Achternaam:</Form.Label>
            <Form.Control type="text" name="surname" required />
            <Form.Control.Feedback type="invalid">
              Vul uw achternaam in.
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              Ziet er goed uit!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

                    <Form.Group controlId="postcode" className="mt-3">
          <Form.Label>Postcode:</Form.Label>
          <Form.Control type="text" name="postalcode" required />
          <Form.Control.Feedback type="invalid">
            Vul een geldige postcode in.
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">
            Ziet er goed uit!
          </Form.Control.Feedback>
        </Form.Group>

                    <Form.Group controlId="leeftijd" className="mt-3">
          <Form.Label>Leeftijdscategorie:</Form.Label>
          <FormControl as="select" required>
            <option value=""></option>
            <option value="option1">Onder de 18</option>
            <option value="option2">18-30</option>
            <option value="option3">31-45</option>
            <option value="option4">45+</option>
          </FormControl>
          <Form.Control.Feedback type="invalid">
            Kies uw leeftijdscategorie.
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">
            Ziet er goed uit!
          </Form.Control.Feedback>
        </Form.Group>

                    <Form.Group controlId="email" className="mt-3">
          <Form.Label>E-Mail adres:</Form.Label>
          <Form.Control type="text" name="email" required />
          <Form.Control.Feedback type="invalid">
            Vul een geldig e-mail adres in.
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">
            Ziet er goed uit!
          </Form.Control.Feedback>
        </Form.Group>

                    <Form.Group controlId="nummer" className="mt-3">
          <Form.Label>Telefoonnummer:</Form.Label>
          <Form.Control type="text" name="telnumber" required />
          <Form.Control.Feedback type="invalid">
            Vul een geldig telefoonnummer in.
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">
            Ziet er goed uit!
          </Form.Control.Feedback>
        </Form.Group>
        <Row>
                        <Form.Group as={Col} controlId="benadering" className="mt-3">
            <Form.Label>Voorkeur benadering:</Form.Label>
            <FormControl as="select" required>
              <option value=""></option>
              <option value="option1">Optie 1</option>
              <option value="option2">Optie 2</option>
            </FormControl>
            <Form.Control.Feedback type="invalid">
              Kies een voorkeur.
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              Ziet er goed uit!
            </Form.Control.Feedback>
          </Form.Group>

                        <Form.Group as={Col} controlId="onderzoek" className="mt-3">
            <Form.Label>Voorkeur onderzoek:</Form.Label>
            <FormControl as="select" required>
              <option value=""></option>
              <option value="option1">Optie 1</option>
              <option value="option2">Optie 2</option>
            </FormControl>
            <Form.Control.Feedback type="invalid">
              Kies een voorkeur.
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid">
              Ziet er goed uit!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Check type="checkbox" label="Mogen commerciele partijen U benaderen?" className="mt-3" />

        <Button variant="primary" type="submit" className="w-100 mt-3"> Maak account</Button>

        <p className="p-2 mt-3">Heeft u al een account?</p>

        <Button
          href="ExpertLogin"
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

ExpertSignUp.propTypes = {
  handleToLogin: PropTypes.func.isRequired,
  handleToExpertPortal: PropTypes.func.isRequired,
};

export default ExpertSignUp;