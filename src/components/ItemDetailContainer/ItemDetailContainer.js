import React, { useEffect, useState } from 'react'
import {ItemDetail} from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer () {
    const [detailProducto, setDetailProducto] = useState([]);
    const {id} = useParams()
    const promiseDetailProducto= () =>{
        return new Promise ((resolve,reject)=>{
            setTimeout(() => resolve(
                [
                    {titulo:'Mujer Bonita',
                    subtitulo: 'Un elegante empresario,Edward Lewis,hace el esmerado intento de adaptar a una mujer llamada Vivían Ward a las reglas de una sofisticada empresa de negocios.',
                    stock: 4,
                    src: "Fotos/mujerbonita.jpg",
                    precio:1000,
                    type:'romantica',
                    id: 1},
                  {
                    titulo:'Notting Hill',
                    subtitulo: 'Anna Scott, estrella de cine, y William Thacker, un biblotecario, se conocen en un lugar llamado Notting Hill. Nace un inusitado romance, obstaculizado la prensa y sus propias diferencias.',
                    stock: 8,
                    src: "Fotos/nottinghill.jpg",
                    precio:1200,
                    type:'romantica',
                    id: 2
                  },
                  {
                    titulo:'Realmente amor',
                    subtitulo: 'Las vidas de varias parejas se entrecruzan en Londres, poco antes de la Navidad.Esta encantadora comedia romántica cuenta diez historias de amor entrelazadas.',
                    stock: 9,
                    src: "Fotos/loveactually.jpg",
                    precio:870,
                    type:'comedia',
                    id: 3
                  }]),
                2000
            ); }); };
          
        useEffect(() =>{
            promiseDetailProducto().then(() => {
              detailProducto.find( element => element.id === id)
              setDetailProducto(detailProducto) ;
              console.log(detailProducto)
            });
        },[id]); 
    return <div>
         
    <ItemDetail detailProducto={detailProducto}/> 
   </div>
}
 export default ItemDetailContainer