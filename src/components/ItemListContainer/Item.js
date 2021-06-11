import React from 'react'
import Card from 'react-bootstrap/Card'
import './Item.css';

function Items (props){

    const {children,titulo,subtitulo,src,precio} = props
    return    <Card ><Card.Img variant="top" src={src} style={{ height: '20rem' }} className="cardEstilo"/>
    <Card.Body>
      <Card.Title className="tituloCard">{titulo}</Card.Title>
      <Card.Text className="precio">
        <h5>${precio}</h5>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     {children}
    </Card.Footer></Card> 
}

export default Items