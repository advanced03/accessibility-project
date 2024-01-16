import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function NavbarComponent({ portalType }) {
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleLogout = () => {
        setShowLogoutModal(false);
    };

    const handleCloseLogoutModal = () => {
        setShowLogoutModal(false);
    };

    const handleShowLogoutModal = () => {
        setShowLogoutModal(true);
    };

    const homeLink = `/${portalType}_portal`;

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top">
                <Navbar.Brand>
                    <img
                        alt="Logo van stichting accessibility"
                        src="/icons/logo_small.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Stichting Accessibility
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={homeLink}>Home</Nav.Link>
                        <Nav.Link href={`${portalType}Profiel`}>Profiel</Nav.Link>
                        <Nav.Link onClick={handleShowLogoutModal}>Log Uit</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={showLogoutModal} onHide={handleCloseLogoutModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Uitloggen</Modal.Title>
                </Modal.Header>
                <Modal.Body>Weet u zeker dat u wilt uitloggen?</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseLogoutModal}>
                        Annuleer
                    </Button>
                    <Button variant="danger" href="portal">
                        Log uit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NavbarComponent;
