import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Zelmer from "../img/Zelmer.png";
import Bosch from "../img/Bosch.png";
import Delonghi from "../img/Delonghi.png";
import Irobot from "../img/Irobot.png";
import Tefal from "../img/Tefal.png";

import { MdCoffeeMaker } from "react-icons/md";

const AGD = () => {
  return (
    <>
      <div id="agd" className="section-space">
        <Container>
          <h2>AGD</h2>
          <hr></hr>

          <div className="ServiveName">
            <MdCoffeeMaker />
            <h3>
              Ekspresy do kawy, czajniki, odkurzacze, roboty kuchenne, miksery,
              artykuły elektryczne
            </h3>
          </div>

          <Row className="details flex-center">
            <Col sm={2} className="center">
              <img src={Zelmer} className="brands" alt="Zelmer" />
            </Col>
            <Col sm={2} className="center">
              <img src={Bosch} className="brands" alt="Bosch" />
            </Col>
            <Col sm={2} className="center">
              <img src={Delonghi} className="brands" alt="Delonghi" />
            </Col>
            <Col sm={2} className="center">
              <img src={Irobot} className="brands" alt="Irobot" />
            </Col>
            <Col sm={2} className="center">
              <img src={Tefal} className="brands" alt="Tefal" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AGD;
