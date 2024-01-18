import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import "@/pages/pages_css/Password.css"; 

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(`Een reset-e-mail is verzonden naar ${email}`);
  };

  return (
    <body className="achtergrond" style={{ display: 'grid', placeItems: 'center' }}>
    <Container className='passreset w-50 p-5'>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h3>Wachtwoord Resetten</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Emailadres</Form.Label>
              <Form.Control
                type="email"
                placeholder="Voer uw e-mail in"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Verstuur Resetlink
            </Button>

            {message && (
              <Form.Text className="text-muted mt-3">
                {message}
              </Form.Text>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
    </body>
  );
};

export default PasswordReset;
