import React from "react";
import Container from "react-bootstrap/Container";

const Map = () => {
  return (
    <>
      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.394305407271!2d19.944205015701087!3d49.60917057936819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47160a9e4db5085b%3A0x8e476ca6a7cba9f7!2sRynek%208%2C%2034-700%20Rabka-Zdr%C3%B3j!5e0!3m2!1spl!2spl!4v1672828936409!5m2!1spl!2spl"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
