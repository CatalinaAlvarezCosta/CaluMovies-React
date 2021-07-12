import React, { useEffect, useState } from "react";
import { ItemsList } from "./ItemList";
import CardColumns from "react-bootstrap/CardColumns";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/firebase";
import Spinner from "react-bootstrap/Spinner";
function ItemListContainer() {
  const [productos, setProducto] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("productos");
    setLoading(true);
    setTimeout(() => {
      if (
        categoryId === null ||
        categoryId === undefined ||
        categoryId === ""
      ) {
        itemCollection.get().then((querySnapshot) => {
          setProducto(querySnapshot.docs.map((doc) => doc.data()));
          setLoading(false);
        });
      } else {
        const categorias = itemCollection.where("type", "==", categoryId);
        categorias.get().then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            itemCollection.get().then((querySnapshot) => {
              setProducto(querySnapshot.docs.map((doc) => doc.data()));
            });
          }
          setLoading(false);
          setProducto(querySnapshot.docs.map((doc) => doc.data()));
        });
      }
    }, 500);
  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <div>
          <Spinner animation="border" variant="secondary" />
        </div>
      ) : (
        <div>
          <CardColumns>
            {productos.map((productos, i) => (
              <ItemsList producto={productos} key={i} />
            ))}
          </CardColumns>
        </div>
      )}
    </div>
  );
}
export default ItemListContainer;
