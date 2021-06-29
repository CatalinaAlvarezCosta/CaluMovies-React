import React, { useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {
  const [productosAgregados, setProductosAgregados] = useState([]);

  const addItem = (id) => {
    const productoCarrito = productosAgregados.find(
      (el) => el.id === productosAgregados.id
    );
    if (productoCarrito) {
      setProductosAgregados(
        productosAgregados.map((element) =>
          element.id === productosAgregados.id
            ? {
                ...productoCarrito,
                cantidad:
                  productoCarrito.cantidad + productosAgregados.cantidad,
              }
            : element
        )
      );
    }
  };

  function eliminarProducto(id) {
    let productoAEliminar = productosAgregados.find((el) => el.id == id);
    if (productoAEliminar.cantidad == 0) {
      let indice = productosAgregados.indexOf(productoAEliminar);
      productosAgregados.splice(indice, 1);
    }
  }
  function vaciarCarrito() {
    productosAgregados.splice(0, productosAgregados.length);
    productosAgregados = [];
  }
  return (
    <CartContext.Provider
      value={
        ([productosAgregados, setProductosAgregados],
        eliminarProducto,
        vaciarCarrito)
      }
    >
      {children}
    </CartContext.Provider>
  );
};
