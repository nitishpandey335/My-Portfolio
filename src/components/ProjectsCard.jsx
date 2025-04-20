import React from "react";
import { Col } from "react-bootstrap";

function ProjectsCard({ title, description, img, link }) {
  return (
    <>
      <Col sm={6} md={4}>
        <div className="project-image-box">
          <img src={img} alt="project" />
          <div className="text">
            <h3>{title}</h3>
            <p>{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: "10px", display: "inline-block" }}
            >
              View Project
            </a>
          </div>
        </div>
      </Col>
    </>
  );
}

export default ProjectsCard;
