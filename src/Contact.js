import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import FormMessage from "./FormMessage";
const Contact = () => {
  return (
    <Container className="my-3">
      <h1 className="text-center text-success">--Contact Me--</h1>
      <h5>
        To reach me, you can use the following channels: phone calls, emails,
        and messages
      </h5>
      <Row>
        <Col>
          <Card>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <FontAwesomeIcon icon={faEnvelope} />
                rene.songa1@gmail.com
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faTelegram} />
                +250 788 7781
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faWhatsapp} />
                +250 783 684 145
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faGlobe} />
                In any of these languages below:
              </ListGroup.Item>
              <ListGroup.Item>English</ListGroup.Item>
              <ListGroup.Item>French</ListGroup.Item>
              <ListGroup.Item>Swahili</ListGroup.Item>
              <ListGroup.Item>Kinyarwanda</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;