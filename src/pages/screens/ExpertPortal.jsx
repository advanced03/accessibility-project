import React from 'react';
import "@/pages/pages_css/ExpertPortal.css";
import { Container, Row, Col, ListGroup, Tab } from 'react-bootstrap';
import NavbarComponent from "./components/NavbarComponent";

export const Ervaringsdeskundige = () => {
    return (
        
        <body className="achtergrond" style={{ display: 'grid', placeItems: 'center' }}>
            <Container fluid id="expert-portal" className="w-50 p-5"> 
            <h1>Portaal ervaringsdeskundige</h1>
                <NavbarComponent portalType="expert" />
                <Tab.Container id="list-group-tabs-example" className="tab" defaultActiveKey="#link1">
                    <Row>
                        <Col>
                            <ListGroup className="mb-5">
                                <ListGroup.Item action href="#link1">
                                    Opdracht: Tekst leesbaarheid.
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    Opdracht: Kleurcontrast.
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link3">
                                    Opdracht: Schermlezer compabiliteit.
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1">Tweakers.net: Kies welke lettertype beter leesbaar is, lettertype x of y?</Tab.Pane>
                                <Tab.Pane eventKey="#link2">Tweakers.net: Is de nieuwe website rustig op de ogen?</Tab.Pane>
                                <Tab.Pane eventKey="#link3">Tweakers.net Werken schremlezers goed met de nieuwe versie van tweakers?</Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>

                    <Row>
                    <h2>Geschiedenis</h2>
                        <Col>
                            <ListGroup className="mb-5">
                                <ListGroup.Item action href="#link8" disabled>
                                   Opdracht: Toetsenbordnavigatie. 
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link9" disabled>
                                    Opdracht Scrollbalk 
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link10"disabled>
                                    Feedback Stickhting Accessibility
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <Tab.Content>
                                <Tab.Pane eventKey="#link8"></Tab.Pane>
                                <Tab.Pane eventKey="#link9"></Tab.Pane>
                                <Tab.Pane eventKey="#link10"></Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>

                </Tab.Container>
            



            </Container>
        </body>
    );
};

export default Ervaringsdeskundige;
