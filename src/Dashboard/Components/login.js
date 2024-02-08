
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Hardcoded credentials for demonstration
    const hardcodedUsername = 'gaushalaadmin';
    const hardcodedPassword = 'gaushala@kqr501';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      onLogin(); // Call the parent component's login function
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className='text-center'>
            <Button  className='mt-3 mb-3 col-12 ' variant="primary" type="submit" block>
              Login
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

