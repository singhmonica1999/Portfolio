import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiIntellijidea,
  SiApachemaven,
  SiSwagger,
  SiSplunk
} from "react-icons/si";
import {
  DiGit
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
       <SiApachemaven /> 
       <div style={{ fontSize: "0.4em", paddingBottom: "10px" }}> Maven </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div style={{ fontSize: "0.4em", paddingBottom: "10px" }}> VsCode</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div style={{ fontSize: "0.4em", paddingBottom: "10px" }}> Postman </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger />
        <div style={{ fontSize: "0.4em", paddingBottom: "10px" }}> Swagger </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        <div style={{ fontSize: "0.4em", paddingBottom: "10px" }}> IntellijIdea</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSplunk />
       <div style={{ fontSize: "0.4em", paddingBottom: "10px" }}>Splunk</div> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      <div style={{ fontSize: "0.4em", paddingBottom: "10px" }}>Git</div> 
      </Col>
    </Row>
  );
}

export default Toolstack;
