import React from 'react'
import './ItemDetail.css';
import ItemCount from '../ItemCount'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

export const ItemDetail = ({detailProducto}) =>{
  const history = useHistory()
    return    <div className="detailGeneral" >  
    <div className="fotoDetail"><img src={detailProducto.src}  alt="FotoDetail"/> </div> 
    <div className="infoDetail">
      <h1 className="tituloDetail">{detailProducto.titulo}</h1>
      <p className="subtituloDetail">{detailProducto.subtitulo}</p>
      <h3 className="precioDetail"> ${detailProducto.precio}</h3>
      <ItemCount min={1} max={detailProducto.stock}/>
      <Button variant="outline-dark" onClick ={e => history.push ('/cart')} className="finalizarButton">Finalizar Compra</Button>{' '}
      <Button variant="outline-info" onClick ={e => history.push ('/')}>Volver al inicio</Button>{' '}
     </div>   </div> 
}