import React from "react";
import { Container, Table } from "react-bootstrap";
import { FaTrophy } from "react-icons/fa";
import "./Titles.css";
import Topbar from "./Topbar";
import liverpoolTitles from "./TitlesData";

function Titles() {
  return (
    <div className="titles">
      <Topbar />
      <div className="titles-container">
        <Container>
          <h1>
            <FaTrophy /> Titles
          </h1>
          <Table striped hover responsive="xl">
            <thead>
              <tr>
                <th>
                  <h5>Type</h5>
                </th>
                <th>
                  <h5>Competition</h5>
                </th>
                <th>
                  <h5>Titles</h5>
                </th>
                <th>
                  <h5>Seasons</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              {liverpoolTitles.map((title, index) => (
                <tr key={index}>
                  <td>
                    <strong>{title.type}</strong> <br />
                    <img src={title.typeImage} alt="icon" />
                  </td>
                  <td>
                    <strong> {title.competition} </strong>
                    <br />
                    <img
                      src={title.competitionImage}
                      alt="icon"
                      id="comp-logo"
                    />
                  </td>
                  <td>
                    <strong>{title.titles}</strong>
                  </td>
                  <td>{title.seasons}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
}

export default Titles;
