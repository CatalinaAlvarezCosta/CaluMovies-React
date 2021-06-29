import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
const Cart = (id) => {
  const [productosAgregados, setProductosAgregados] = useContext(CartContext);
  function eliminarProducto(id) {
    let productoAEliminar = productosAgregados.find((el) => el.id === id);
    productoAEliminar.cantidad--;
    if (productoAEliminar.cantidad === 0) {
      let indice = productosAgregados.indexOf(productoAEliminar);
      productosAgregados.splice(indice, 1);
    }
  }
  function vaciarCarrito() {
    productosAgregados.splice(0, productosAgregados.length);
  }
  return (
    <div>
      <h2>CARRITO</h2>
      <ListGroup>
        {productosAgregados.map((producto, i) => (
          <ListGroup.Item variant="dark" key={i}>
            {producto.titulo} Cantidad:{producto.cantidad}{" "}
            <button class="boton-eliminar" onClick={() => eliminarProducto()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button variant="outline-info" onClick={(e) => vaciarCarrito()}>
        Borrar Todo
      </Button>{" "}
    </div>
  );
};

export default Cart;
