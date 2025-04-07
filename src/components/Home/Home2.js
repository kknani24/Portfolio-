import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm deeply passionate about advancing the fields of{" "}
              <b className="purple">Artificial Intelligence</b>,{" "}
              <b className="purple">Machine Learning</b>, and{" "}
              <b className="purple">Data Science</b>.
              <br />
              <br />
              My focus lies in exploring intelligent systems that learn, adapt, and solve real-world problems using data-driven approaches.
              I regularly work with technologies such as{" "}
              <b className="purple">TensorFlow, PyTorch, Scikit-learn,</b> and{" "}
              <b className="purple">Pandas</b>, applying them to areas like{" "}
              <b className="purple">predictive modeling, computer vision,</b> and{" "}
              <b className="purple">natural language processing</b>.
              <br />
              <br />
              I enjoy working on challenging problems at the intersection of data and intelligence, and I constantly strive to deepen my understanding of statistical learning, neural networks, and applied AI research.
              <br />
              <br />
              Whether it's training deep models, analyzing large datasets, or experimenting with new architectures, I find great fulfillment in pushing the boundaries of what machines can learn and do.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kknani24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kausik-challapalli/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
