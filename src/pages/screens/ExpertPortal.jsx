import React from 'react';
import "@/pages/pages_css/ExpertPortal.css";
import { Container, Row, Col, ListGroup, Tab } from 'react-bootstrap';
import NavbarComponent from "./components/NavbarComponent";

export const Ervaringsdeskundige = () => {
    return (
        
        <body className="achtergrond">
            <Container fluid id="expert-portal" className="w-50 p-5"> 
            <h1>Portaal ervaringsdeskundige</h1>
                <NavbarComponent portalType="expert" />
                <Tab.Container id="list-group-tabs-example" className="tab" defaultActiveKey="#link1">
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
                                <Tab.Pane eventKey="#link1">Hello</Tab.Pane>
                                <Tab.Pane eventKey="#link2">Test</Tab.Pane>
                                <Tab.Pane eventKey="#link3">one</Tab.Pane>
                                <Tab.Pane eventKey="#link4">two</Tab.Pane>
                                <Tab.Pane eventKey="#link5">tree</Tab.Pane>
                                <Tab.Pane eventKey="#link6">to the</Tab.Pane>
                                <Tab.Pane eventKey="#link6">fo</Tab.Pane>
                                <Tab.Pane eventKey="#link7">bla bla bla</Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>

                    <Row>
                    <h2>Geschiedenis</h2>
                        <Col>
                            <ListGroup className="mb-5">
                                <ListGroup.Item action href="#link8">
                                    Link 8
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link9">
                                    Link 9
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link10">
                                    Link 10
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link11">
                                    Link 11
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link12">
                                    Link 12
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link13">
                                    Link 13
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link14">
                                    Link 14
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <Tab.Content>
                                <Tab.Pane eventKey="#link8">Hello</Tab.Pane>
                                <Tab.Pane eventKey="#link9">Test1</Tab.Pane>
                                <Tab.Pane eventKey="#link10">one2</Tab.Pane>
                                <Tab.Pane eventKey="#link11">two3</Tab.Pane>
                                <Tab.Pane eventKey="#link12">tree4</Tab.Pane>
                                <Tab.Pane eventKey="#link13">to the5</Tab.Pane>
                                <Tab.Pane eventKey="#link14">fo6</Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>

                </Tab.Container>
            



            </Container>
        </body>
    );
};

export default Ervaringsdeskundige;
