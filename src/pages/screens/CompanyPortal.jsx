import React from 'react';
import "@/pages/pages_css/CompanyPortal.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavbarComponent from "./components/NavbarComponent";

export const BedrijfsPortaal = () => {
    return (
        <Container className="BedrijfsPortaal">
        <div className="bedrijfs-portaal">
                <NavbarComponent portalType="company" />
            <div className="div">
                    <div className="rectangle" />
               
            <Row classname="rowstyle">
                        <Col xs={12} md={7} lg={4}>
                <div className="frame">
                    <div className="overlap">
                        <div className="vector" />
                        <header className="text-wrapper">Onderzoek app ING</header>
                    </div>
                    <div className="overlap-group">
                                    <header aria-placeholder="klik hier om een nieuw onderzoek aan te maken">
                                        <div className="img" />
                                        <div className="vector-2" />
                                        
                                    </header>
                    </div>
                    <header className="text-wrapper-2">Uw onderzoeken:</header>
                    <div className="overlap-group-2">
                        <header className="text-wrapper-3">Onderzoek website ING</header>
                        <div className="vector-3"/>
                    </div>
                    <div className="overlap-2">
                        <div className="vector-4"/>
                        <header className="text-wrapper-4">Onderzoek app ING</header>
                    </div>
                    <div className="overlap-3">
                        <header className="text-wrapper-4">Onderzoek app ING</header>
                        <div className="vector-5"/>
                    </div>
                    </div>
                        </Col>
                    </Row>
                </div>
                    </div>
            </Container>
    );
};
export default BedrijfsPortaal;

