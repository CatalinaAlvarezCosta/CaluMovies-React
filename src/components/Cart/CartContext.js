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
                cantidad: productoCarrito.cantidad + element.cantidad,
              }
            : element
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{ productosAgregados, addItem, setProductosAgregados }}
    >
      {children}
    </CartContext.Provider>
  );
};
