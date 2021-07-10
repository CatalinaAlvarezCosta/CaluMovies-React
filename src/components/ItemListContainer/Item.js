import React from "react";
import Card from "react-bootstrap/Card";
import "./Item.css";
import { Link } from "react-router-dom";
export const Items = ({ producto }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={producto.src}
        style={{ height: "20rem" }}
        className="cardEstilo"
      />
      <Card.Body>
        <Card.Title className="tituloCard">{producto.titulo}</Card.Title>
        <Card.Text className="precio">${producto.precio}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <button className="botonVerMas">
          <Link
            to={`/item/${producto.titulo}`}
            className="botonVerMasLink-items"
          >
            Ver más
          </Link>
        </button>
      </Card.Footer>
    </Card>
  );
};
