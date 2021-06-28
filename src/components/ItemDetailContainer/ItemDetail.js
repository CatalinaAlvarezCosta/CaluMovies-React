import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export const ItemDetail = ({ detailProducto }) => {
  const history = useHistory();
  const changeStyle = () => {
    var c = document.getElementById(`${detailProducto.id}Count`);
    var t = document.getElementById(`${detailProducto.id}Terminar`);
    var a = document.getElementById(`${detailProducto.id}Agregar`);
    if (t.style.display === "none") t.style.display = "block";
    a.style.display = "none";
    c.style.display = "none";
  };
  const cancelChangeStye = () => {
    var c = document.getElementById(`${detailProducto.id}Count`);
    var t = document.getElementById(`${detailProducto.id}Terminar`);
    var a = document.getElementById(`${detailProducto.id}Agregar`);
    if (t.style.display === "block") t.style.display = "none";
    a.style.display = "block";
    c.style.display = "block";
  };

  const styleButton = {
    display: "none",
  };
  return (
    <div className="detailGeneral">
      <div className="fotoDetail">
        <img
          src={detailProducto.src}
          className="fotoDetailImg"
          alt="FotoDetail"
        />{" "}
      </div>
      <div className="infoDetail">
        <h1 className="tituloDetail">{detailProducto.titulo}</h1>
        <p className="subtituloDetail">{detailProducto.subtitulo}</p>
        <h3 className="precioDetail"> ${detailProducto.precio}</h3>
        <ItemCount
          min={1}
          max={detailProducto.stock}
          idProducto={detailProducto.id}
        />
        <button
          id={`${detailProducto.id}Agregar`}
          onClick={(e) => changeStyle()}
          className="botonAgregar"
        >
          AGREGAR AL CARRITO
        </button>
        <div id={`${detailProducto.id}Terminar`} style={styleButton}>
          {" "}
          <Button
            variant="outline-dark"
            onClick={(e) => history.push("/cart")}
            className="finalizarButton"
          >
            Finalizar Compra
          </Button>{" "}
          <Button variant="outline-danger" onClick={(e) => cancelChangeStye()}>
            Cancelar
          </Button>{" "}
        </div>
        <Button variant="outline-info" onClick={(e) => history.push("/")}>
          Volver al inicio
        </Button>{" "}
      </div>{" "}
    </div>
  );
};
