import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import mio from "../img/mio.png";
import tomtom from "../img/tomtom.png";
import president from "../img/president.png";
import garmin from "../img/garmin.png";
import pioneer from "../img/pioneer.png";

import { AiFillCar } from "react-icons/ai";

import "./caraudio.scss";

const Consoles = () => {
  return (
    <>
      <div id="caraudio" className="section-space">
        <Container>
          <h2>CAR AUDIO</h2>
          <hr></hr>

          <div className="ServiveName">
            <AiFillCar />
            <h3>
              Rejestratory, Nawigacje, radia samochodowe, radia cb, głośniki,
              wzmacniacze
            </h3>
          </div>

          <Row className="details">
            <Col className="center" sm={4}>
              <img src={mio} className="brands" alt="Mio" />
            </Col>
            <Col className="center" sm={4}>
              <img src={tomtom} className="brands" alt="Tomtom" />
            </Col>
            <Col className="center" sm={4}>
              <img src={president} className="brands" alt="President" />
            </Col>
            <Col className="center" sm={6}>
              <img src={garmin} className="brands" alt="Garmin" />
            </Col>
            <Col className="center" sm={6}>
              <img src={pioneer} className="brands" alt="Pioneer" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Consoles;
