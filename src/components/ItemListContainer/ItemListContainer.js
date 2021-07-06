import React, { useEffect, useState } from "react";
import { ItemsList } from "./ItemList";
import CardColumns from "react-bootstrap/CardColumns";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/firebase";
function ItemListContainer() {
  const [productos, setProducto] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("productos");

    if (categoryId === null || categoryId === undefined || categoryId === "") {
      itemCollection.get().then((querySnapshot) => {
        setProducto(querySnapshot.docs.map((doc) => doc.data()));
      });
    } else {
      const categorias = itemCollection.where("type", "==", categoryId);
      categorias.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          itemCollection.get().then((querySnapshot) => {
            setProducto(querySnapshot.docs.map((doc) => doc.data()));
          });
        }
        setProducto(querySnapshot.docs.map((doc) => doc.data()));
      });
    }
  }, [categoryId]);

  return (
    <div>
      <CardColumns>
        {productos.map((productos, i) => (
          <ItemsList producto={productos} key={i} />
        ))}
      </CardColumns>
    </div>
  );
}
export default ItemListContainer;
