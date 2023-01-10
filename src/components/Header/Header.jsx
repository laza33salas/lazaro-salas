import React from "react";
import "./header.css";
import Button from "react-bootstrap/Button";

export const Header = () => {
  return (
    <header
      className="bg-header container-fluid p-0 d-flex flex-column justify-content-between"
      id=""
    >
      <div className="wave1"></div>
      <div className="d-flex flex-column align-items-center ">
        <h1 className="text-center">Bienvenidos a mi portafolio</h1>
        <p className="text-center">
          Soy Lázaro Salas, Desarrollador Full Stack
        </p>
        <Button className="w-25">Más sobre mí</Button>
      </div>

      <div className="wave2"></div>
    </header>
  );
};

export default Header;
