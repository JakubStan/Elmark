import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carusel.scss";
import RTV from "./sliders/RTV.png";
import AGD from "./sliders/AGD.png";
import SecuritySystems from "./sliders/SecuritySystems.png";
import Phons from "./sliders/Phons.png";
import TV from "./sliders/TV.png";
import PC from "./sliders/PC.png";
import Console from "./sliders/Console.png";

const Carusel = () => {
  return (
    <>
      <div id="carusel">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={RTV} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={AGD} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={SecuritySystems}
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={Phons} alt="Third slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={TV} alt="Third slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={PC} alt="Third slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={Console} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Carusel;
