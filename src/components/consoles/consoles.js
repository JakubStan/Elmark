import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PlayStation from "../img/PlayStation.png";
import XBOX from "../img/XBOX.png";
import Nintendo from "../img/Nintendo.png";

import { GiConsoleController } from "react-icons/gi";

const Consoles = () => {
  return (
    <>
      <div id="consoles" className="section-space">
        <Container>
          <h2>KONSOLE</h2>
          <hr></hr>

          <div className="ServiveName">
            <GiConsoleController />
            <h3>
              Bogaty wybór konsol,akcesoriów oraz gier - skup sprzedaż wymiana
            </h3>
          </div>

          <Row className="details flex-center">
            <Col sm={4} className="center">
              <img src={PlayStation} className="brands" alt=" PlayStation" />
            </Col>
            <Col sm={4} className="center">
              <img src={XBOX} className="brands" alt="XBOX" />
            </Col>
            <Col sm={4} className="center">
              <img src={Nintendo} className="brands" alt="Nintendo" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Consoles;
