import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import paysafecard from "../img/paysafecard.png";
import TMOBILE from "../img/TMOBILE.png";
import VIRGIN from "../img/VIRGIN.png";
import PLAY from "../img/PLAY.png";

import { AiFillCreditCard } from "react-icons/ai";

const Phonecard = () => {
  return (
    <>
      <div id="phonecard" className="section-space">
        <Container>
          <h2>DOŁADOWANIA</h2>
          <hr></hr>
          <div className="ServiveName">
            <AiFillCreditCard />
            <h3>
              Sprzedaż wszystkich doładowań telefonicznych oraz Paysafecard.
              Sprzedaż oraz rejestracja kart SIM
            </h3>
          </div>

          <Row className="details">
            <Col sm={3} className="center">
              <img src={TMOBILE} className="brands" alt="TMOBILE" />
            </Col>
            <Col sm={3} className="center">
              <img src={VIRGIN} className="brands" alt="VIRGIN" />
            </Col>
            <Col sm={3} className="center">
              <img src={PLAY} className="brands" alt="PLAY" />
            </Col>
            <Col sm={3} className="center">
              <img src={paysafecard} className="brands" alt="paysafecard" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Phonecard;
