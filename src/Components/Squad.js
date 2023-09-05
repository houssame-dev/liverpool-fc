import React, { useEffect } from "react";
import "aos/dist/aos.css";
import aos from "aos"; 
import Topbar from "./Topbar";
import SquadData from "./SquadData";
import "./Squad.css";
import { Card, Row, Col, Container, Badge } from "react-bootstrap";
import { BsPeopleFill } from "react-icons/bs";

function Squad() {
  useEffect(() => {
    aos.init({ duration: 3000 });
  }, []);

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
    <>
      <Topbar />
      <div className="squad-container">
        <Container>
          <h1 data-aos="fade-right">
            <BsPeopleFill size={40} /> Squad
          </h1>
          {Object.keys(positionGroups).map((position, index) => (
            <div key={index} className="position-group">
              <h2 data-aos="fade-left">{position}s</h2>
              <Row>
                {positionGroups[position].map((player, index) => (
                  <Col key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card className="player-card" data-aos="fade-up">
                      <Card.Img
                        variant="top"
                        src={player.image}
                        className="card-player-img"
                      />
                      <Card.Body>
                        <Card.Title>{player.name}</Card.Title>
                        <hr />
                        <Card.Text>
                          <strong>{player.position} </strong>
                          <Badge bg="danger" pill>
                          <strong>  {player.jerseyNumber}</strong>
                          </Badge>
                          <br />
                          <strong>
                            <img src={player.nationalityImage} alt="icon" />{" "}
                            {player.nationality}
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
    </>
  );
}

export default Squad;
