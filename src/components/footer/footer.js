import React from "react";
import Logo from "../img/logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.scss";

import { FaWhatsapp } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { TbZoomMoney } from "react-icons/tb";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Mailto({ email, subject, body, ...props }) {
  return <a href={`mailto:${email}`}>{props.children}</a>;
}

const Callto = ({ phone, children }) => {
  return <a href={`tel:${phone}`}>{children}</a>;
};

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col md={4} sm={12}>
              <img src={Logo} alt="Elmark Profesjonalny sklep i usługi" />

              <ul>
                <li>
                  <BiMap />
                  <div>
                    <p>Rynek 8</p>
                    <p>34-700 Rabka-Zdrój</p>
                  </div>
                </li>

                <li>
                  <FiClock />
                  <div>
                    <p>Poniedziałek - piątek: 9:00 - 17:00</p>
                    <p>Sobota: 9:00 - 14:00</p>
                  </div>
                </li>

                <li>
                  <FaWhatsapp />
                  <Callto phone="+48 18 267 74 34">18 267 74 34</Callto>
                </li>

                <li>
                  <MdAlternateEmail />
                  <Mailto email="2elmark@wp.pl">2elmark@wp.pl</Mailto>
                </li>

                <li>
                  <TbZoomMoney />
                  <p>NIP: 735-244-82-52</p>
                </li>
              </ul>
            </Col>

            <Col md={4} sm={12}>
              <h4>OFERTA</h4>
              <ul>
                <li>
                  <BsCheckLg />
                  <a href="#rtv">RTV</a>
                </li>

                <li>
                  <BsCheckLg />
                  <a href="#agd">AGD</a>
                </li>

                <li>
                  <BsCheckLg />
                  <a href="#monitoring">MONITORING FIRM ORAZ POSESJI</a>
                </li>

                <li>
                  <BsCheckLg />
                  <a href="#tv">TELEWIZJA</a>
                </li>

                <li>
                  <BsCheckLg />
                  <a href="#phones">TELEFONY</a>
                </li>

                <li>
                  <BsCheckLg />
                  <a href="#hardwares">KOMPUTERY</a>
                </li>

                <li>
                  <BsCheckLg />
                  <a href="#consoles">KONSOLE</a>
                </li>

                <li>
                  <BsCheckLg />
                  <a href="#caraudio">CAR AUDIO</a>
                </li>

                <li>
                  <BsCheckLg />
                  <a href="#services">USŁUGI POCZTOWE I KURIERSKIE</a>
                </li>

                <li>
                  <BsCheckLg />
                  <a href="#services">PRZYJMOWANIE WPŁAT</a>
                </li>
              </ul>
            </Col>

            <Col md={4} sm={12}>
              <h4>POLECAMY</h4>
              <ul>
                <li>
                  <BsCheckLg />
                  <a href="https://kotwicamrzezyno.pl/">
                    www.kotwicamrzezyno.pl
                  </a>
                </li>

                <li>
                  <BsCheckLg />
                  <a href="http://www.polsatbox.pl/">www.polsatbox.pl</a>
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="footer-bottom">
            <hr></hr>

            <Col md={6} sm={12} className="center">
              <h5>Wykonanie: Jakub Stankiewicz</h5>
            </Col>

            <Col md={6} sm={12} className="center">
              <h5>
                Copyright &nbsp;
                <AiOutlineCopyrightCircle />
                &nbsp; Elmark.pl All Rights Reserved
              </h5>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
