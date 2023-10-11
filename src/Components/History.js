import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import { RiBookMarkFill } from "react-icons/ri";
import HistoryData from "./HistoryData";
import Topbar from "./Topbar";
import "./History.css";

function History() {

  return (
    <div className="history">
      <Topbar />
      <div className="history-container">
        <Container>
          <h1>
            <RiBookMarkFill /> History
          </h1>
          <Row className="history-row">
            {HistoryData.map((event, index) => (
              <Col key={index} xs={12} md={6} lg={6} className="history-item">
                <Image
                  src={`${event.image}`}
                  alt={event.title}
                  fluid
                  className="history-img"
                />
                <h2>{event.title}</h2>
                <p>
                  <strong> {event.year} :</strong> {event.description}
                </p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default History;
