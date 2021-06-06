import React from 'react'
import Card from 'react-bootstrap/Card'

function Cards (props){

    const {children,titulo,subtitulo,src} = props
    return    <Card ><Card.Img variant="top" src={src} style={{ height: '20rem' }}/>
    <Card.Body>
      <Card.Title>{titulo}</Card.Title>
      <Card.Text >
        {subtitulo}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     {children}
    </Card.Footer></Card> 
}

export default Cards