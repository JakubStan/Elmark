import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import acer from "../img/acer.png";
import asus from "../img/asus.png";
import tplink from "../img/tplink.png";
import lenovo from "../img/lenovo.png";
import hp from "../img/hp.png";
import apple from "../img/apple.png";
import canon from "../img/canon.png";
import brother from "../img/brother.png";

import { MdOutlineComputer } from "react-icons/md";

const Hardwares = () => {
  return (
    <>
      <div id="hardwares" className="section-space">
        <Container>
          <h2>SPRZĘT KOMPUTEROWY</h2>
          <hr></hr>
          <div className="ServiveName">
            <MdOutlineComputer />
            <h3>
              Laptopy, komputery stacjonarne, tablety, drukarki, routery,
              pamięci itp.
            </h3>
          </div>

          <Row className="details ">
            <Col sm={3} className="center">
              <img src={acer} className="brands" alt="Acer" />
            </Col>
            <Col sm={3} className="center">
              <img src={asus} className="brands" alt="Asus" />
            </Col>
            <Col sm={3} className="center">
              <img src={tplink} className="brands" alt="Tp Link" />
            </Col>
            <Col sm={3} className="center">
              <img src={lenovo} className="brands" alt="Lenowo" />
            </Col>

            <Col sm={3} className="center">
              <img src={apple} className="brands" alt="Apple" />
            </Col>
            <Col sm={3} className="center">
              <img src={canon} className="brands" alt="Canon" />
            </Col>
            <Col sm={3} className="center">
              <img src={brother} className="brands" alt="brother" />
            </Col>
            <Col sm={3} className="center">
              <img src={hp} className="brands" alt="HP" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hardwares;
