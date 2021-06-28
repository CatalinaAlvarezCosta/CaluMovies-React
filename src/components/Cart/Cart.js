import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ListGroup from "react-bootstrap/ListGroup";

const Cart = (id) => {
  const [productosAgregados, setProductosAgregados] = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);
  const productoCarrito = productosAgregados.find((el) => el.id === id);
  if (productoCarrito) {
    setCantidad(cantidad + 1);
  }
  return (
    <div>
      <h2>CARRITO</h2>
      <ListGroup>
        {productosAgregados.map((producto, i) => (
          <ListGroup.Item variant="dark" key={i}>
            {producto.titulo} Cantidad:{cantidad}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Cart;
