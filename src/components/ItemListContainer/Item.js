import React from 'react'
import Card from 'react-bootstrap/Card'
import './Item.css';
import ItemCount from '../ItemCount'
import {Link} from 'react-router-dom'
export const Items = ({producto}) =>{
    return    <Card ><Link to ='/item/{id}'><Card.Img variant="top" src={producto.src} style={{ height: '20rem' }} className="cardEstilo"/>
    <Card.Body>
      <Card.Title className="tituloCard">{producto.titulo}</Card.Title>
      <Card.Text className="precio">
        ${producto.precio}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <ItemCount min={1} max={producto.stock}/>
    </Card.Footer> </Link>
     </Card> 
}

