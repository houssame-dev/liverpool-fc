import React from "react";
import Topbar from "./Topbar";
import SquadData from "./SquadData";
import "./Squad.css";
import { Card, Row, Col, Container, Badge } from "react-bootstrap";
import { BsPeopleFill } from "react-icons/bs";

function Squad() {
  const orderOfPositions = ["Goalkeeper", "Defender", "Midfielder", "Forward"];

  const sortedSquad = [...SquadData].sort(
    (a, b) =>
      orderOfPositions.indexOf(a.position) -
      orderOfPositions.indexOf(b.position)
  );

  // Group players by position
  const positionGroups = sortedSquad.reduce((groups, player) => {
    if (!groups[player.position]) {
      groups[player.position] = [];
    }
    groups[player.position].push(player);
    return groups;
  }, {});

  return (
    <div className="squad">
      <Topbar />
      <div className="squad-container">
        <Container>
          <h1>
            <BsPeopleFill size={40} /> Squad
          </h1>
          {Object.keys(positionGroups).map((position, index) => (
            <div key={index} className="position-group">
              <h2>{position}s</h2>
              <Row>
                {positionGroups[position].map((player, index) => (
                  <Col key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card className="player-card">
                      <Card.Img
                        variant="top"
                        src={player.image}
                        className="card-player-img"
                      />
                      <Card.Body>
                        <Card.Title>{player.name}</Card.Title>
                        <hr />
                        <Card.Text>
                          <div className="number-position">
                            <Badge bg="danger" pill>
                              <strong> {player.jerseyNumber}</strong>
                            </Badge>
                            <strong>{player.position} </strong>
                          </div>
                          <strong>
                            <div className="nationality">
                              <img src={player.nationalityImage} alt="icon" />{" "}
                              {player.nationality}
                            </div>
                          </strong>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
}

export default Squad;
