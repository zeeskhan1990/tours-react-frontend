import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Signin: React.FC = () => {
  return (
    <React.Fragment>
      <Container fluid={true}>
        <Row>
          <Col md={4} lg={6} className="bg-image" />
          <Col md={8} lg={6}>
            <div className="login d-flex align-items-center py-5">
              <Container>
                <Row>
                  <Col md={9} lg={8} className="mx-auto">
                    <h3 className="login-heading mb-4">Welcome back!</h3>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                      </Form.Group>
                      <Button
                        variant="primary"
                        size="lg"
                        block
                        className="btn-login text-uppercase font-weight-bold mb-2"
                        type="submit"
                      >
                        Sign In
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Signin;
