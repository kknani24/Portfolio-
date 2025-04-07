import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kausik Challapalli</span> from <span className="purple">Guntur, India</span>.
            <br />
            I have completed my Bachelor of Technology in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning from <span className="purple">SRM University, AP</span>.
            <br />
            Currently, I am preparing to pursue my Master's in Data Science, driven by a passion for uncovering insights from data and building intelligent systems.
            <br />
            <br />
            Outside of academics and coding, here are a few things that truly excite me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Diving deep into Neural Networks and Advanced Deep Learning architectures
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to state-of-the-art research in AI and Data Science
            </li>
            <li className="about-activity">
              <ImPointRight /> Collaborating in interdisciplinary hackathons and global tech summits
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Adopt. Innovate. Conquer."
          </p>
          <footer className="blockquote-footer">Kausik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
