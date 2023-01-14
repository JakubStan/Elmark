import React from "react";
import "./phones.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SmartPhones from "../img/Phones.png";

import { ImMobile } from "react-icons/im";

const Phones = () => {
  return (
    <>
      <div id="phones" className="section-space">
        <Container>
          <h2>TELEFONY</h2>
          <hr></hr>
          <div className="ServiveName">
            <ImMobile />
            <h3>Telefony komórkowe, stacjonarne, akcesoria </h3>
          </div>

          <Row className="center details">
            <img id="SmartPhones" src={SmartPhones} alt="Telefony" />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Phones;
