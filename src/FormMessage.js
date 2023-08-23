import { Button, Form, InputGroup, Row, Col } from "react-bootstrap";
const FormMessage = () => {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control required type="text" placeholder="First name" />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Your Email</Form.Label>
          <InputGroup>
            <InputGroup.Email id="inputGroupPrepend">@</InputGroup.Email>
            <Form.Control
              type="email"
              placeholder="Your Email"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3"></Row>
      <Button type="submit">Submit form</Button>
    </Form>
  );
};

export default FormMessage;
