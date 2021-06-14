import React from 'react'
import './ItemDetail.css';
import ItemCount from '../ItemCount'

export const ItemDetail = ({detailProducto}) =>{
    return    <div className="detailGeneral" > <div className="fotoDetail"><img src={detailProducto.src}  alt="FotoDetail"/> </div> 
    <div className="infoDetail">
      <h1 className="tituloDetail">{detailProducto.titulo}</h1>
      <p className="subtituloDetail">{detailProducto.subtitulo}</p>
      <h3 className="precioDetail"> ${detailProducto.precio}</h3>
      <ItemCount min={1} max={detailProducto.stock}/>
     </div>   </div> 
}