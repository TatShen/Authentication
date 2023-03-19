import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../App.css'




function SignIn() {
  return (
    
<Form>
      <Form.Group as={Row} className="mb-4" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
          Email
        </Form.Label>
        <Col sm="10">
        <Form.Control type="Logil" placeholder="Login" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-4" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <Button variant="secondary" size="lg" disabled>
        Sign In
      </Button>{' '}
    </Form>
  );
}

export default SignIn