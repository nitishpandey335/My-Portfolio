import React from "react";
// Syles
import "./Projects.css";
// Project Image
import img1 from "../assets/image/pandeyjee-img1.jpg";
import img2 from "../assets/image/grocery-img2.jpg";
import img3 from "../assets/image/Tic-toe.png";
import img4 from "../assets/image/online-img3.jpg";
import img5 from "../assets/image/portfolio (2).png";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectsCard from "./ProjectsCard";
import colorSharp from "../assets/image/color-sharp2.png";

function Projects() {
  const projects = [
    {
      title: "Pandeyjee Cart",
      description: "An e-commerce web app built with ReactJS for smooth online shopping.",
      img: img1,
      link: "https://pandeyjee-cart-335.vercel.app/Grocery-react/",
    },
    {
      title: "Online Grocery Store",
      description: "A responsive grocery shopping platform with dynamic product listings.",
      img: img2,
      link:"https://github.com/nitishpandey335/Online-Grocery.git",
    },
    {
      title: "Tic-Toe Game",
      description: "An interactive Tic-Tac-Toe game with real-time gameplay and UI.",
      img: img3,
      link: "https://github.com/nitishpandey335/Tic-Toe-Game.git",
    },
    {
      title: "Online Exam System",
      description: "A secure online examination platform with instant result evaluation.",
      img: img4,
    }, 
    {
      title: "Portfolio",
      description: "A personal portfolio website showcasing my projects, skills, and certifications.",
      img: img5,
      link: "https://nitishpandey335portfolio.netlify.app/",
    },
     

  ];

  // Return JSX
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
          <h2>Projects</h2>
<p>
  Here are some of the projects I've built to sharpen my skills and explore new technologies. Each project reflects my passion for creating efficient, user-friendly applications and solving real-world problems through code.
</p>

            <Tab.Container defaultActiveKey="first" id="projects-tabs">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Second</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tap Third</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectsCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-right" alt="" />
    </section>
  );
}

export default Projects;
