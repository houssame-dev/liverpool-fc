import React, { useEffect } from "react";
import "aos/dist/aos.css";
import aos from "aos";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { RiQuestionFill } from "react-icons/ri";
import "./About.css";
import AboutData from "./AboutData";
import Topbar from "./Topbar";

function About() {
  useEffect(() => {
    aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <Topbar />
      <div className="about-container">
        <Container>
          <h1 data-aos="fade-right">
            <RiQuestionFill /> About
          </h1>
          <Row>
            <Col>
              <ListGroup variant="flush">
                {AboutData.map((about, index) => (
                  <ListGroup.Item key={index} data-aos="fade-up">{about}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;
