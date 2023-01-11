import React from "react";
import "./abouth.scss";

import Container from "react-bootstrap/Container";

const Abouth = () => {
  return (
    <>
      <div className="abouth">
        <Container>
          <h2>O NAS</h2>
          <hr></hr>

          <p id="abouth">
            Nasza firma powstała w 1989 roku. Od początku do dzisiaj zajmujemy
            się wszystkim co związane jest z elektroniką a zwłaszcza telewizją.
            Sprzedaż sprzętu RTV, IT oraz AGD to nasza główna działalność.
            Oferujemy również szeroki zakres usług montażowych i serwisowych. Po
            ponad 30 latach działalności możemy szczycić się olbrzymią ilością
            zadowolonych klientów, oraz niezawodnością wykonanych instalacji.
          </p>

          <div id="offert" className="offert">
            <h2>OFERTA</h2>
            <hr></hr>
            <p>
              W naszej ofercie znajdą Państwo bogaty wybór sprzętów RTV , IT
              oraz AGD znanych marek. Zajmujemy się sprzedażą jak i również
              profesjonalnym montażem sprzętu elektronicznego, komputerowego,
              telewizji satelitarnej, naziemnej oraz przemysłowej. Dowóz oraz
              montaż u klienta. Oferujemy również serwis i obsługę sprzedawanych
              urządzeń.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Abouth;
