import React from "react";
import "./phones.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import apple from "../img/apple.png";
import xiaomi from "../img/xiaomi.png";
import huawei from "../img/huawei.png";
import Samsung from "../img/Samsung.png";
import SmartPhones from "../img/Phones.png";

import { ImMobile } from "react-icons/im";

const Phones = () => {
  return (
    <>
      <div id="phones" className="section-space">
        <Container>
          <Row>
            <h2>TELEFONY</h2>
            <hr></hr>
            <div className="ServiveName">
              <ImMobile />
              <h3>Telefony komórkowe, stacjonarne, akcesoria </h3>
            </div>
          </Row>
          <Row className="center details">
            <img id="SmartPhones" src={SmartPhones} />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Phones;
