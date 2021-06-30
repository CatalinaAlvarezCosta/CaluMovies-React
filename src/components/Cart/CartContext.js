import React, { useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {
  const [productosAgregados, setProductosAgregados] = useState([]);

  return (
    <CartContext.Provider value={{ productosAgregados, setProductosAgregados }}>
      {children}
    </CartContext.Provider>
  );
};
