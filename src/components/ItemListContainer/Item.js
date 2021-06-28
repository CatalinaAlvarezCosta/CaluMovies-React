import React from "react";
import Card from "react-bootstrap/Card";
import "./Item.css";
import Button from "react-bootstrap/Button";
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
        <Button variant="outline-info">
          <Link to={`/item/${producto.id}`}>Ver más</Link>
        </Button>{" "}
      </Card.Footer>
    </Card>
  );
};
