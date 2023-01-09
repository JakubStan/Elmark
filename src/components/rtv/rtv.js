import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Samsung from "../img/Samsung.png";
import Lg from "../img/Lg.png";
import Sony from "../img/Sony.png";
import xiaomi from "../img/xiaomi.png";
import philips from "../img/Philips.png";
import JBL from "../img/JBL.png";

import { FiMonitor } from "react-icons/fi";

const RTV = () => {
  return (
    <>
      <div id="rtv" className="section-space">
        <Container>
          <h2>RTV</h2>
          <hr></hr>

          <div className="ServiveName">
            <FiMonitor />
            <h3>
              Telewizory, soundbary, radia, konsole, gry, głośniki przenośne{" "}
            </h3>
          </div>

          <Row className="details">
            <Col sm={2} className="center">
              <img src={Samsung} className="brands" alt="Samsung" />
            </Col>
            <Col sm={2} className="center">
              <img src={Lg} className="brands" alt="Lg" />
            </Col>
            <Col sm={2} className="center">
              <img src={Sony} className="brands" alt="Sony" />
            </Col>
            <Col sm={2} className="center">
              <img src={xiaomi} className="brands" alt="Xiaomi" />
            </Col>
            <Col sm={2} className="center">
              <img src={philips} className="brands" alt="Philips" />
            </Col>
            <Col sm={2} className="center">
              <img src={JBL} className="brands" alt="JBL" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default RTV;
