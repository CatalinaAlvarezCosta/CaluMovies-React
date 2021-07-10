import React from "react";
import { Items } from "./Item";

export const ItemsList = ({ producto, i }) => {
  return (
    <section className="itemList">
      <Items producto={producto} key={i} className="card" />
    </section>
  );
};
