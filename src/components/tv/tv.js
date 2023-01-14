import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TELMOR from "../img/TELMOR.png";
import Ferguson from "../img/Ferguson.png";
import Technisat from "../img/Technisat.png";
import Opticum from "../img/Opticum.png";
import Inverto from "../img/Inverto.png";
import NC from "../img/nc+.png";

import { FiMonitor } from "react-icons/fi";

const TV = () => {
  return (
    <>
      <div id="tv" className="section-space">
        <Container>
          <h2>TELEWIZJA</h2>
          <hr></hr>

          <div className="ServiveName">
            <FiMonitor />
            <h3>
              Tunery DVB-T, dekodery satelitarne, anteny, konwertery, kable
            </h3>
          </div>

          <Row className="details ">
            <Col sm={4} className="center">
              <img src={TELMOR} className="brands" alt="TELMOR" />
            </Col>
            <Col sm={4} className="center">
              <img src={Ferguson} className="brands" alt="Ferguson" />
            </Col>
            <Col sm={4} className="center">
              <img src={Technisat} className="brands" alt="Technisat" />
            </Col>
            <Col sm={4} className="center">
              <img src={Opticum} className="brands" alt="Opticum" />
            </Col>
            <Col sm={4} className="center">
              <img src={Inverto} className="brands" alt="Inverto" />
            </Col>
            <Col sm={4} className="center">
              <img src={NC} className="brands" alt="NC+" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TV;
