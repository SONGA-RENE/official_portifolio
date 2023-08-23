import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ikibondo from "./BABY.jpg";
import frog from "./frog.jpg";
import code from "./codes.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import cerican from "./cerican.jpg";
import food from "./food.jpeg";
import tic from "./tic.jpg";

const Portifolio = () => {
  return (
    <Container className="m-2">
      <div className="heading">
        <h1 className="text-center text-success">--MY Portifólio--</h1>
      </div>
      <div>
        {/* Projects will be added here */}
        <h3 className="text-center">
          Here is some projects i have done in various programming language.
          <h3>
            Numerous additional projects are kept private due to their sensitive
            nature.
          </h3>
        </h3>

        <Row xs={1} md={2} className="mx-5 my-3">
          <Card style={{ width: "18rem" }} className="mx-2">
            <Card.Body>
              <Card.Title>CERICAN</Card.Title>
              <Card.Subtitle className="text-muted my-1">
                It is a team project we developed this system using Next Js.
              </Card.Subtitle>
              <Card.Img variant="bottom" src={cerican} className="rounded" />
              <Link to={{ pathname: "https://cerican.com/" }} target="_blank">
                <FontAwesomeIcon color="black" icon={faGlobe} />
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="mx-2">
            <Card.Body>
              <Card.Title>Ikibondo</Card.Title>
              <Card.Subtitle className="text-muted my-1">
                I developed this system using React JS as a frontend and Node JS
                as a backend
              </Card.Subtitle>
              <Card.Img variant="bottom" src={ikibondo} className="rounded" />
              <Link
                to={{ pathname: "https://github.com/SONGA-RENE/ikibondo" }}
                target="_blank"
              >
                <FontAwesomeIcon color="black" icon={faGithub} />
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="mx-2">
            <Card.Body>
              <Card.Title>Taste Food App</Card.Title>
              <Card.Subtitle className="text-muted my-1">
                I developed this system using Flutter, Django and restful APIs
                as the Backend.
              </Card.Subtitle>
              <Card.Img variant="bottom" src={food} className="rounded" />
              <Link
                to={{ pathname: "https://github.com/SONGA-RENE/TasteFood" }}
                target="_blank"
              >
                <FontAwesomeIcon color="black" icon={faGithub} />
              </Link>
            </Card.Body>
          </Card>
        </Row>
        <Row xs={1} md={2} className="mx-5 ">
          <Card style={{ width: "18rem" }} className="mx-2">
            <Card.Body>
              <Card.Title>Tic tac toe Game</Card.Title>
              <Card.Subtitle className="text-muted my-1">
                As we all know Tic Tac Toe is a simple game but also fun, I
                developed this game using only javascsript and Html. Special
                thing about this game is that it AI never loose!
              </Card.Subtitle>
              <Card.Img variant="bottom" src={tic} className="rounded" />
              <Link
                to={{ pathname: "https://github.com/SONGA-RENE/tictactoe" }}
                target="_blank"
              >
                <FontAwesomeIcon color="black" icon={faGithub} />
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="mx-2">
            <Card.Body>
              <Card.Title>Travel trip</Card.Title>
              <Card.Subtitle className="text-muted my-1">
                I am developing this system using Tailwind, NextJS.
              </Card.Subtitle>
              <Card.Img variant="bottom" src={frog} className="rounded" />
              <p className="text-success">Coming soon....</p>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="mx-2">
            <Card.Body>
              <Card.Title>Prison Mangement system</Card.Title>
              <Card.Subtitle className="text-muted my-1">
                I am developing this system using Tailwind, NextJS.
              </Card.Subtitle>
              <Card.Img variant="bottom" src={code} className="rounded" />

              <p className="text-success">Coming soon....</p>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </Container>
  );
};

export default Portifolio;
