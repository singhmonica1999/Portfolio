import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Journey </strong>
        </h1>
        <p style={{ color: "white" }}>
          "Transforming ideas into digital reality, one project at a time"
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Software Engineer Intern"
              company="Natwest Group"
              time= "( July 2022 - Jan 2023 )"
              description="As a full stack developer, also worked Contributed to transforming a PlatformPlanner Tool from Excel VBA to a modern web application using ReactJS and Spring Boot, improving UI, scalability, and maintainability."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Software Engineer"
              company="Natwest Group"
              time="( Jan 2023 - Present )"
              description="Designed and developed RESTful APIs from scratch using Spring Boot for microservices adhering to SOLID principles, design patterns, following rigorous unit testing" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
