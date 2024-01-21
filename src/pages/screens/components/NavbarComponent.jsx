import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "@/pages/pages_css/NavbarComponent.css";

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
      <Navbar
        collapseOnSelect
        expand="lg"
        className="custom-navbar"
        fixed="top"
      >
        <Navbar.Brand>
          <img
            alt="Logo van stichting accessibility"
            src="/icons/logo_small.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Stichting Accessibility
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              to={portalType === "company" ? "/CompanyPortal" : "/ExpertPortal"}
              className="nav-link"
            >
              Home
            </Link>
            <Link
              to={`${
                portalType === "company" ? "/CompanyProfiel" : "/ExpertProfiel"
              }`}
              className="nav-link"
            >
              Profiel
            </Link>

            {portalType === "company" && (
              <>
                <Link to="/assignment_creator" className="nav-link">
                  Opdracht aanmaken
                </Link>
                <Link to="/admin_dashboard" className="nav-link">
                  Administrator Dashboard
                </Link>
              </>
            )}
            <Link onClick={handleShowLogoutModal} className="nav-link">
              Log Uit
            </Link>
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
          <Link to="/portal" onClick={handleLogout}>
            <Button variant="danger">Log uit</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavbarComponent;
