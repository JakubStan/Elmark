import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./services.scss";

import DPD from "../img/DPD.png";
import GLS from "../img/GLS.png";
import DHL from "../img/DHL.png";
import ORLEN from "../img/ORLEN.png";
import Furgonetka from "../img/Furgonetka.png";
import PocztaPolska from "../img/PocztaPolska.png";

import { GiReceiveMoney } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiEnvelope } from "react-icons/gi";

const Services = () => {
  return (
    <>
      <div id="services" className="section-space">
        <Container>
          <h2>USŁUGI</h2>
          <hr></hr>

          <Row>
            <Col sm={12}>
              <div className="ServiveName">
                <GiReceiveMoney />
                <h3>Punkt przyjmowania opłat</h3>
              </div>

              <p className="details">
                U nas możesz opłacić wszystkie swoje rachunki za jedyne 2,50 zł
                bez wypełniania zbędnych druków wpłat.
              </p>
            </Col>

            <Col sm={12}>
              <div className="ServiveName">
                <TbTruckDelivery />
                <h3>Punkt usług kurierskich</h3>
              </div>
              <p className="details">
                W naszym punkcie nadasz i odbierzesz paczkę oraz list;
                współpracujemy między innymi:
              </p>

              <Row>
                <Col className="CompanyLogos" sm={4}>
                  <img src={DPD} alt="DPD" />
                </Col>
                <Col className="CompanyLogos" sm={4}>
                  <img src={ORLEN} alt="ORLEN" />
                </Col>
                <Col className="CompanyLogos" sm={4}>
                  <img src={DHL} alt="DHL" />
                </Col>
                <Col className="CompanyLogos" sm={6}>
                  <img src={GLS} alt="GLS" />
                </Col>
                <Col className="CompanyLogos" sm={6}>
                  <img src={Furgonetka} alt="Furgonetka" />
                </Col>
              </Row>
            </Col>

            <Col sm={12}>
              <div className="ServiveName">
                <GiEnvelope />
                <h3>Agencja pocztowa</h3>
              </div>
              <p className="details">
                Jesteśmy agencją Poczty Polskiej nadasz i odbierzesz listy;
                przesyłki polecone, paczki zagraniczne.
              </p>
              <Col className="CompanyLogos" sm={12}>
                <img src={PocztaPolska} alt="PocztaPolska" />
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
