import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col, Card } from "react-bootstrap";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <Container className="my-2">
      <h1 className="text-center text-success">--Information about me--</h1>
      <Row>
        <Col>
          <p className="text-center fs-4 display-6 p-2 fst-italic">
            I am a software developer from Rwanda, actively participating in
            software development teams since 2017 as an integral part of my
            academic journey. I possess an Advanced Diploma in Computer Science
            and a Bachelor's degree in Information Technology, earned from the
            University of Rwanda. With more than 3 years of experience, I
            specialize as a Full Stack Web Developer.
          </p>
          <p className="text-center fs-4 display-6 p-2 fst-italic">
            I am highly skilled in coding across a diverse range of programming
            languages, encompassing HTML and CSS, along with their corresponding
            frameworks like Bootstrap and Tailwind. I am also proficient in
            Python and its framework, Django. My proficiency extends to
            JavaScript and its associated frameworks, including Node.js,
            React.js, and Next.js, which I am currently leveraging in my ongoing
            projects. I have chosen Next.js based on endorsements from seasoned
            developers due to its advanced capabilities and best practices.
            Furthermore, for mobile development, I utilize Flutter.
          </p>
          <Link
            className="btn btn-outline-success"
            to={{
              pathname:
                "https://drive.google.com/file/d/1N9XCZjeKvtHrJZpsDBEQM57YvtiXBa4u/view?usp=sharing",
            }}
            target="_blank"
          >
            Download CV <FontAwesomeIcon icon={faDownload} />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Footer className="mx-auto mt-3">
            <Link
              to={{ pathname: "https://www.facebook.com/songa.rene.5" }}
              className="px-3"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              to={{ pathname: "https://www.instagram.com/songare12/" }}
              className="px-3"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} color="crimson" />
            </Link>
            <Link
              to={{
                pathname: "https://www.linkedin.com/in/songa-rene-477b46254",
              }}
              className="px-3"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} color="blue" />
            </Link>
            <Link
              to={{ pathname: "https://github.com/SONGA-RENE" }}
              className="px-3"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} color="black" />
            </Link>
          </Card.Footer>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
