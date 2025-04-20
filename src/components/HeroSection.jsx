import React, { useState, useEffect } from "react";
// React Bootstrap
import { Col, Container, Row } from "react-bootstrap";
// Bootstrap Icons
import * as Icon from "react-bootstrap-icons";
// Hero Section image
import headerImg from "../assets/image/header-img.svg";
// Style for the Hero Section
import "./HeroSection.css";

function HeroSection() {
  const [loopNum, setLoopNum] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const toRotate = ["Web Developer", "Front-End Developer", "DevOps Engineer"];
  const [Text, setText] = useState("");
  const [Delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, Delta);

    return () => clearInterval(ticker);
  }, [Text, Delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = deleting
      ? fullText.substring(0, Text.length - 1)
      : fullText.substring(0, Text.length + 1);
    setText(updatedText);

    if (deleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!deleting && updatedText === fullText) {
      setDeleting(true);
      setDelta(period);
    } else if (deleting && updatedText === "") {
      setDeleting(false);
      setDelta(500);
      setLoopNum(loopNum + 1);
    }
  };

  const handleConnectClick = (event) => {
    event.preventDefault(); // Prevent default action if any
    window.location.href = "https://www.linkedin.com/in/-nitish-pandey-/"; // Navigate to LinkedIn profile
  };

  return (
    <>
      <section className="banner" id="home">
        <Container className="align-items-center">
          <Row>
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome To My Portfolio</span>
              <h1>
                Hi, I'm Nitish Pandey
                <br />
                <span className="wrap">{Text}</span>
              </h1>
              <p>
                I enjoy building web applications, working with cloud
                technologies, and solving real-world problems through code. I
                love exploring new tools and frameworks, creating user-friendly
                projects, and continuously improving my skills in software
                development, DevOps, and cloud computing.
              </p>

              <button onClick={handleConnectClick}>
                Let's Connect <Icon.ArrowRightCircle size={25} />
              </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="hero-section" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HeroSection;
