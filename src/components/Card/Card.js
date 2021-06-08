import React from 'react'
import Card from 'react-bootstrap/Card'
import './Card.css';

function Cards (props){

    const {children,titulo,subtitulo,src} = props
    return    <Card ><Card.Img variant="top" src={src} style={{ height: '20rem' }} className="cardEstilo"/>
    <Card.Body>
      <Card.Title className="tituloCard">{titulo}</Card.Title>
      <Card.Text className="textoCard">
        {subtitulo}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     {children}
    </Card.Footer></Card> 
}

export default Cards