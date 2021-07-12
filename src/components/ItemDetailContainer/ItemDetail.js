import React, { useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { CartContext } from "../Cart/CartContext";

export const ItemDetail = ({ detailProducto }) => {
  const history = useHistory();
  const { productosAgregados, setProductosAgregados } = useContext(CartContext);

  const agregarCart = (count) => {
    const productoCarrito = productosAgregados.find(
      (el) => el.id === detailProducto.id
    );
    if (productoCarrito) {
      setProductosAgregados(
        productosAgregados.map((el) =>
          el.id === detailProducto.id
            ? {
                ...productoCarrito,
                cantidad: productoCarrito.cantidad + count,
              }
            : el
        )
      );
    } else {
      setProductosAgregados([
        ...productosAgregados,
        {
          titulo: detailProducto.titulo,
          id: detailProducto.id,
          cantidad: count,
          precio: detailProducto.precio,
          src: detailProducto.src,
        },
      ]);
    }

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
    a.style.display = "inline";
    c.style.display = "inline";
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
          producto={detailProducto}
          onAdd={agregarCart}
        />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </Button>{" "}
      </div>{" "}
    </div>
  );
};
