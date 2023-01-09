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
              Laptopy, komputery stacjonarne, tablety, drukarki, routery, pamici
              itp
            </h3>
          </div>

          <div className="flex-center details ">
            <img src={acer} className="brands" alt="Acer" />
            <img src={asus} className="brands" alt="Asus" />
            <img src={tplink} className="brands" alt="Tp Link" />
            <img src={lenovo} className="brands" alt="Lenowo" />
          </div>
          <div className="flex-center details">
            <img src={apple} className="brands" alt="Apple" />
            <img src={canon} className="brands" alt="Canon" />
            <img src={brother} className="brands" alt="brother" />
            <img src={hp} className="brands" alt="HP" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hardwares;
