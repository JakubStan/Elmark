import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import VISA from "../img/VISA.png";
import MASTERCARD from "../img/MASTERCARD.png";
import MAESTRO from "../img/MAESTRO.png";
import BLIK from "../img/BLIK.png";

import santander from "../img/santander.png";
import creditagricole from "../img/creditagricole.png";

import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { BsBank } from "react-icons/bs";

const CreditCards = () => {
  return (
    <>
      <div id="payments" className="section-space">
        <Container>
          <h2>PŁATNOŚCI</h2>
          <hr></hr>

          <Row>
            <Col sm={6}>
              <div className="ServiveName">
                <BsFillCreditCard2BackFill />
                <h3>Akceptujemy karty płatnicze: </h3>
              </div>

              <Row className="details">
                <Col sm={3}>
                  <img src={VISA} className="brands" alt="VISA" />
                </Col>
                <Col sm={3}>
                  <img src={MASTERCARD} className="brands" alt="MASTERCARD" />
                </Col>
                <Col sm={3}>
                  <img src={MAESTRO} className="brands" alt="MAESTRO" />
                </Col>
                <Col sm={3}>
                  <img src={BLIK} className="brands" alt="BLIK" />
                </Col>
              </Row>
            </Col>

            <Col sm={6}>
              <div className="ServiveName">
                <BsBank />
                <h3>Sprzedaż ratalna:</h3>
              </div>

              <Row className="details">
                <Col sm={6}>
                  <img src={santander} className="brands" alt="santander" />
                </Col>
                <Col sm={6}>
                  <img
                    src={creditagricole}
                    className="brands"
                    alt="creditagricole"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CreditCards;
