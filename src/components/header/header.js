import React from "react";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../img/logo.png";
import "./header.scss";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <Navbar className="navbar" expand="lg">
            <Navbar.Brand href="#home">
              <img src={Logo} alt="Elmark Profesjonalny sklep i usługi" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#abouth">O NAS</Nav.Link>
                <Nav.Link href="#offert">OFERTA</Nav.Link>
                <Nav.Link href="#services">USŁUGI</Nav.Link>
                <Nav.Link href="#payments">PŁATNOŚCI</Nav.Link>
                <Nav.Link href="#contact">KONTAKT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    </>
  );
};

export default Header;
