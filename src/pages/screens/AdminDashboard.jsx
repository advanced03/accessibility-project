import React from 'react';
import "@/pages/pages_css/CompanyPortal.css";
import { Container, Table } from 'react-bootstrap';
import NavbarComponent from "./components/NavbarComponent";

export const AdminDashboard = () => {
    return (
        <body className="achtergrond" style={{ display: 'grid', placeItems: 'center' }}>
            <Container fluid id="company-portal" className="w-50 p-5 mt-5"> 
                <h1>Admin Dashboard</h1>
                <NavbarComponent portalType="company" />
                <Table striped bordered hover responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Gebruikersnaam</th>
      <th>Opdracht</th>
      <th>Status</th>
      <th>Feedback</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>ING</td>
      <td>50%</td>
      <td>Geen</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Salih</td>
      <td>Tweakers</td>
      <td>100%</td>
      <td>Website is niet responsive genoeg.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Iso</td>
      <td>HHS</td>
      <td>100%</td>
      <td>Meer accessibility opties.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Lisa</td>
      <td>Google</td>
      <td>75%</td>
      <td>Verbeter de laadtijd van de pagina.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Peter</td>
      <td>Amazon</td>
      <td>90%</td>
      <td>Voeg een donkere modus toe.</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Emma</td>
      <td>Microsoft</td>
      <td>80%</td>
      <td>Optimaliseer voor mobiele apparaten.</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Thomas</td>
      <td>Netflix</td>
      <td>95%</td>
      <td>Verbeter de gebruikersinterface voor slechtziende mensen.</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Laura</td>
      <td>Facebook</td>
      <td>60%</td>
      <td>Voeg meer accessibility opties toe.</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Chris</td>
      <td>LinkedIn</td>
      <td>85%</td>
      <td>Maak de zoekfunctie simpeler in gebruik</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Nina</td>
      <td>Twitter</td>
      <td>70%</td>
      <td>Optimaliseer afbeeldingen voor screenreaders.</td>
    </tr>
  </tbody>
</Table>

            </Container>
        </body>
    );
};

export default AdminDashboard;
