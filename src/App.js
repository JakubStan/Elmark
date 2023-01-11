import React from "react";
import "./styles/style.scss";
import Header from "./components/header/header";
import Carusel from "./components/carusel/carusel";
import Abouth from "./components/abouth/abouth";
import Phonecard from "./components/phonecard/phonecard";
import Services from "./components/services/services";
import Footer from "./components/footer/footer";
import CreditCards from "./components/creditcards/creditcards";
import Phones from "./components/phones/phones";
import Hardwares from "./components/hardwares/hardwares";
import Rtv from "./components/rtv/rtv";
import AGD from "./components/agd/agd";
import TV from "./components/tv/tv";
import Monitoring from "./components/monitoring/monitoring";
import Consoles from "./components/consoles/consoles";
import CarAudio from "./components/caraudio/caraudio";
import Contact from "./components/contact/contact";
import Map from "./components/map/map";

const App = () => {
  return (
    <>
      <Header />
      <Carusel />
      <Abouth />
      <Rtv />
      <AGD />
      <Monitoring />
      <TV />
      <Hardwares />
      <Consoles />
      <CarAudio />
      <Phones />
      <Phonecard />
      <Services />
      <CreditCards />
      <Contact />
      <Map />
      <Footer />
    </>
  );
};

export default App;
