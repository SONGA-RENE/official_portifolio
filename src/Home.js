import { Container } from "react-bootstrap";
import songa from "./songa.jpg";
const Home = () => {
  return (
    <Container>
      <section className="home container-fluid">
        <div className="homepage container m-2">
          <div className="row">
            <div className="col-md-5 text-center text-md-start">
              <h1 className=" fw-bold display-4 text-center text-uppercase fs-1 text-success">
                I am SONGA Rene
              </h1>
              <h2 className="fw-bold text-center fs-3 text-success  display-6">
                Software Developer
              </h2>
              <p className="text-center fs-4 display-6 p-2 fst-italic border-start border-success border-3 ">
                Welcome to my portfolio!
                <br /> I am a skilled and passionate fullstack developer with
                expertise in building immersive and user-friendly web
                experiences. Through my projects, I strive to combine
                creativity, functionality, and the latest technologies to
                deliver outstanding results.
              </p>
              <p className="text-center fs-4 display-6 p-2 fst-italic border-start border-success border-3">
                Thank you for visiting my portfolio, and I look forward to the
                opportunity to work together and create exceptional digital
                experiences.
              </p>
            </div>
            <div className="col mb-3">
              <img
                className="img-fluid rounded-circle mx-5 d-none d-md-block "
                src={songa}
                alt="my profile pic"
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Home;
