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
            <Col sm={4}>
              <img src={Logo} alt="Elmark Profesjonalny sklep i usługi" />

              <ul>
                <li>
                  <BiMap />
                  <div>
                    <p>Rynek 8</p>
                    <p>34-700 Rabka Zdrój</p>
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

            <Col sm={4}>
              <h4>OFERTA</h4>
              <ul>
                <li>
                  <BsCheckLg />
                  <p>
                    <a href="#rtv">RTV</a>
                  </p>
                </li>

                <li>
                  <BsCheckLg />
                  <p>
                    <a href="#agd">AGD</a>
                  </p>
                </li>

                <li>
                  <BsCheckLg />
                  <p>
                    <a href="#monitoring">MONITORING FIRM ORAZ POSESJI</a>
                  </p>
                </li>

                <li>
                  <BsCheckLg />
                  <p>
                    <a href="#tv">TELEWIZJA</a>
                  </p>
                </li>

                <li>
                  <BsCheckLg />
                  <p>
                    <a href="#phones">TELEFONY</a>
                  </p>
                </li>

                <li>
                  <BsCheckLg />
                  <p>
                    <a href="#hardwares">KOMPUTERY</a>
                  </p>
                </li>

                <li>
                  <BsCheckLg />
                  <p>
                    <a href="#consoles">KONSOLE</a>
                  </p>
                </li>

                <li>
                  <BsCheckLg />
                  <p>
                    <a href="#caraudio">CAR AUDIO</a>
                  </p>
                </li>

                <li>
                  <BsCheckLg />
                  <p>
                    <a href="#services">USŁUGI POCZTOWE I KURIERSKIE</a>
                  </p>
                </li>

                <li>
                  <BsCheckLg />
                  <p>
                    <a href="#services">PRZYJMOWANIE WPŁAT</a>
                  </p>
                </li>
              </ul>
            </Col>

            <Col sm={4}>
              <h4>POLECAMY</h4>
              <ul>
                <li>
                  <BsCheckLg />
                  <p>
                    <a href="https://kotwicamrzezyno.pl/">
                      www.kotwicamrzezyno.pl
                    </a>
                  </p>
                </li>

                <li>
                  <BsCheckLg />
                  <p>
                    <a href="http://www.polsatbox.pl/">www.polsatbox.pl</a>
                  </p>
                </li>
                <li>
                  <BsCheckLg />
                  <p>
                    <a href="https://www.topdietetyk.pl/">
                      www.topdietetyk.pl/
                    </a>
                  </p>
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="footer-bottom">
            <hr></hr>

            <Col sm={6}>
              <h5>Wykonanie: Jakub Stankiewicz</h5>
            </Col>

            <Col sm={6}>
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
