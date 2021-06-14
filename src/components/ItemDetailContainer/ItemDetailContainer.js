import React, { useEffect, useState } from 'react'
import {ItemDetail} from './ItemDetail'


function ItemDetailContainer () {
    const [detailProducto, setDetailProducto] = useState([]);
    const promiseDetailProducto= () =>{
        return new Promise ((resolve,reject)=>{
            setTimeout(() => resolve(
                    [
                        {titulo:'Mujer Bonita',
                        subtitulo: 'Un elegante empresario,Edward Lewis,hace el esmerado intento de adaptar a una mujer llamada Vivían Ward a las reglas de una sofisticada empresa de negocios.',
                        stock: 4,
                        src: "Fotos/mujerbonita.jpg",
                        precio:1000},]),
                2000
            ); }); };
        useEffect(() =>{
            promiseDetailProducto().then((detailProducto) => {setDetailProducto(detailProducto) });
        },[]); 
    return <div>
        {detailProducto.map((detailProducto,i) => 
    <ItemDetail key={i} detailProducto={detailProducto}/> )}
   </div>
}
 export default ItemDetailContainer