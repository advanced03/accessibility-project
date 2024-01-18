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
                <Tab.Container id="list-group-tabs" className="tab" defaultActiveKey="#link1">
                    <Row>
                        <Col>
                            <ListGroup className="mb-5">
                                <ListGroup.Item action href="#link1">
                                    Link 1
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    Link 2
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link3">
                                    Link 3
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link4">
                                    Link 4
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link5">
                                    Link 5
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link6">
                                    Link 6
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link7">
                                    Link 7
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1">Opdracht 1</Tab.Pane>
                                <Tab.Pane eventKey="#link2">Opdracht 2</Tab.Pane>
                                <Tab.Pane eventKey="#link3">Opdracht 3</Tab.Pane>
                                <Tab.Pane eventKey="#link4">Opdracht 4</Tab.Pane>
                                <Tab.Pane eventKey="#link5">Opdracht 5</Tab.Pane>
                                <Tab.Pane eventKey="#link6">Opdracht 6</Tab.Pane>
                                <Tab.Pane eventKey="#link7">Opdracht 7</Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>

                    <Row>
                    <h2 className='mb-5'>Geschiedenis</h2>
                        <Col>
                            <ListGroup className="mb-5">
                                <ListGroup.Item action href="#link8">
                                Verlopen 1
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link9">
                                Verlopen 2
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link10">
                                Verlopen 3
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link11">
                                Verlopen 4
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link12">
                                Verlopen 5
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link13">
                                Verlopen 6
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link14">
                                Verlopen 7
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <Tab.Content>
                                <Tab.Pane eventKey="#link8">opdr9</Tab.Pane>
                                <Tab.Pane eventKey="#link9">opdr10</Tab.Pane>
                                <Tab.Pane eventKey="#link10">opdr11</Tab.Pane>
                                <Tab.Pane eventKey="#link11">opdr12</Tab.Pane>
                                <Tab.Pane eventKey="#link12">opdr13</Tab.Pane>
                                <Tab.Pane eventKey="#link13">opdr14</Tab.Pane>
                                <Tab.Pane eventKey="#link14">opdr15</Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>

                </Tab.Container>
            



            </Container>
        </body>
    );
};

export default Ervaringsdeskundige;
