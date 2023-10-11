import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { RiQuestionFill } from "react-icons/ri";
import "./About.css";
import AboutData from "./AboutData";
import Topbar from "./Topbar";

function About() {

  return (
    <div className="about">
      <Topbar />
      <div className="about-container">
        <Container>
          <h1>
            <RiQuestionFill /> About
          </h1>
          <Row>
            <Col>
              <ListGroup variant="flush">
                {AboutData.map((about, index) => (
                  <ListGroup.Item key={index}>{about}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
