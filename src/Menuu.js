import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  faBriefcase,
  faEnvelope,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Menuu = () => {
  return (
    <Container className="my-2">
      <Card.Footer className="mx-auto bg-dark fixed-bottom ">
        <Link to="/" className="px-4 ">
          <FontAwesomeIcon icon={faHome} className="text-success" />
        </Link>
        <Link to="/about" className="px-5">
          <FontAwesomeIcon icon={faUser} className="text-success" />
        </Link>
        <Link to="/portifolio" className="px-5">
          <FontAwesomeIcon icon={faBriefcase} className="text-success" />
        </Link>
        <Link to="/contact" className="px-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-success" />
        </Link>
      </Card.Footer>
    </Container>
  );
};

export default Menuu;
