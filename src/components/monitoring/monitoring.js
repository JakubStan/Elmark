import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import hikvision from "../img/hikvision.png";
import dahua from "../img/dahua.png";
import imou from "../img/imou.png";
import dvs from "../img/dvs.png";

import { RiAlarmWarningFill } from "react-icons/ri";

const Monitoring = () => {
  return (
    <>
      <div id="monitoring" className="section-space">
        <Container>
          <h2>MONITORING FIRM ORAZ POSESJI</h2>
          <hr></hr>

          <div className="ServiveName">
            <RiAlarmWarningFill />
            <h3>Kamery, rejestratory, systemy alarmowe</h3>
          </div>

          <Row className="details">
            <Col sm={3} className="center">
              <img src={hikvision} className="brands" alt="Hikvision" />
            </Col>
            <Col sm={3} className="center">
              <img src={dahua} className="brands" alt="Dahua" />
            </Col>
            <Col sm={3} className="center">
              <img src={imou} className="brands" alt="Imou" />
            </Col>
            <Col sm={3} className="center">
              <img src={dvs} className="brands" alt="Dvs" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Monitoring;
