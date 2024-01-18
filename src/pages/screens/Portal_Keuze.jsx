import React from "react";
import PropTypes from "prop-types";
import { Container, Card, Image } from "react-bootstrap";
import "@/pages/pages_css/Portal_Keuze.css";

const Portaalkeuze = ({ handlePortalButtonClick }) => {
  return (
    <body className="achtergrond" style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
    <Container fluid className="w-50">
      <Image alt="Logo" src="/icons/logo.png"  className="mb-5" fluid/>
      <h1 className="portaltitle">Kies uw portaal:</h1>

          <Card onClick={() => handlePortalButtonClick("company")} className="portal-card mb-5 mt-5">
            <div className="button-content text-center">
              <h2>Bedrijf</h2>
              <img
                className="company-icon"
                alt="Bedrijven icoon"
                src="/icons/company_icon.png"
              />
              <Card.Body>
                Het bedrijfsportaal is het portaal voor de bedrijven die de onderzoeken maken.
              </Card.Body>
            </div>
          </Card>

          <Card onClick={() => handlePortalButtonClick("expert")} className="portal-card">
            <div className="button-content text-center">
              <h2>Ervaringsdeskundige</h2>
              <img
                className="people-icon"
                alt="Ervaringsdeskundige icoon"
                src="/icons/people_icon.png"
              />
              <Card.Body>
                Het ervaringsdeskundigeportaal is het portaal voor deelnemers met een beperking.
              </Card.Body>
            </div>
          </Card>
    </Container>
    </body>
  );
};

Portaalkeuze.propTypes = {
  handlePortalButtonClick: PropTypes.func.isRequired,
};

export default Portaalkeuze;
