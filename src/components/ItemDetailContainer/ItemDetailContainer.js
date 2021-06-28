import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [detailProducto, setDetailProducto] = useState([]);
  const { idItems } = useParams();
  const promiseDetailProducto = () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve([
            {
              titulo: "Mujer Bonita",
              subtitulo:
                "Un elegante empresario,Edward Lewis,hace el esmerado intento de adaptar a una mujer llamada Vivían Ward a las reglas de una sofisticada empresa de negocios.",
              stock: 4,
              src: "/Fotos/mujerbonita.jpg",
              precio: 1000,
              type: "romantica",
              id: "uno",
            },
            {
              titulo: "Notting Hill",
              subtitulo:
                "Anna Scott, estrella de cine, y William Thacker, un biblotecario, se conocen en un lugar llamado Notting Hill. Nace un inusitado romance, obstaculizado la prensa y sus propias diferencias.",
              stock: 8,
              src: "/Fotos/nottinghill.jpg",
              precio: 1200,
              type: "romantica",
              id: "dos",
            },
            {
              titulo: "Realmente amor",
              subtitulo:
                "Las vidas de varias parejas se entrecruzan en Londres, poco antes de la Navidad.Esta encantadora comedia romántica cuenta diez historias de amor entrelazadas.",
              stock: 9,
              src: "/Fotos/loveactually.jpg",
              precio: 870,
              type: "romantica",
              id: "tres",
            },
            {
              titulo: "Avengers: Endgame",
              subtitulo:
                "Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo.",
              stock: 2,
              src: "/Fotos/endgame.jpg",
              precio: 2000,
              type: "accion",
              id: "cuatro",
            },
            {
              titulo: "¿Y dónde están las rubias?",
              subtitulo:
                "Dos torpes agentes del FBI se hacen pasar por dos chicas de la alta sociedad para investigar una serie de secuestros. No obstante, mientras preparan su plan, descubren que irrumpir en la clase privilegiada es mucho más duro de lo que creían.",
              stock: 6,
              src: "/Fotos/rubias.jpg",
              precio: 800,
              type: "comedia",
              id: "cinco",
            },
            {
              titulo: "Batman: el caballero de la noche asciende",
              subtitulo:
                "Ocho años después de asumir la culpa por la muerte de Harvey Dent y desaparecer en la noche, Batman se ve obligado a salir del exilio autoimpuesto gracias a una ladrona astuta y a un terrorista despiadado.",
              stock: 13,
              src: "/Fotos/batman.jpg",
              precio: 1600,
              type: "accion",
              id: "seis",
            },
          ]),
        2000
      );
    });
  };

  useEffect(() => {
    promiseDetailProducto().then((detailProducto) => {
      const dataFiltradaDetail = detailProducto.filter(
        (element) => element.id === idItems
      );
      setDetailProducto(dataFiltradaDetail);
      console.log(dataFiltradaDetail);
    });
  }, [idItems]);
  return (
    <div>
      {detailProducto.map((detailProducto, id) => (
        <ItemDetail detailProducto={detailProducto} key={id} />
      ))}
    </div>
  );
}
export default ItemDetailContainer;
