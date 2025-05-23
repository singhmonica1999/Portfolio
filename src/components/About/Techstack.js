import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiSpringboot,
  SiJunit5
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
        <div style={{ fontSize: "0.4em", paddingBottom: "10px" }}> Springboot</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <div style={{ fontSize: "0.4em", paddingBottom: "10px" }}> Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img
              className="img-fluid logo"
              width={40}
              height={40}
              src="/rest.png"
              alt="logo"
            />
        <div style={{ fontSize: "0.4em", paddingBottom: "10px" }}>REST</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div style={{ fontSize: "0.4em", paddingBottom: "10px" }}> React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiJunit5 />
        <div style={{ fontSize: "0.3em", paddingBottom: "10px" }}>Junits  & Mockito</div>
      </Col>
    </Row>
  );
}

export default Techstack;
