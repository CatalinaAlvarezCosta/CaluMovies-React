import React from 'react'
import Card from 'react-bootstrap/Card'
import './Item.css';
import ItemCount from '../ItemCount'
const data= [
  {titulo:'Mujer Bonita',
  subtitulo: 'Un elegante empresario,Edward Lewis,hace el esmerado intento de adaptar a una mujer llamada Vivían Ward a las reglas de una sofisticada empresa de negocios.',
  stock: 4,
  src: "Fotos/mujerbonita.jpg",
  precio:1000},
{
  titulo:'Notting Hill',
  subtitulo: 'Anna Scott, estrella de cine, y William Thacker, un biblotecario, se conocen en un lugar llamado Notting Hill. Nace un inusitado romance, obstaculizado la prensa y sus propias diferencias.',
  stock: 8,
  src: "Fotos/nottinghill.jpg",
  precio:1200
},
{
  titulo:'Realmente amor',
  subtitulo: 'Las vidas de varias parejas se entrecruzan en Londres, poco antes de la Navidad.Esta encantadora comedia romántica cuenta diez historias de amor entrelazadas.',
  stock: 9,
  src: "Fotos/loveactually.jpg",
  precio:870
}]
function Items (){

    return    <Card >{data.map((producto,i) => 
    <div key={i} >  <Card.Img variant="top" src={producto.src} style={{ height: '20rem' }} className="cardEstilo"/>
    <Card.Body>
      <Card.Title className="tituloCard">{producto.titulo}</Card.Title>
      <Card.Text className="precio">
        <h5>${producto.precio}</h5>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <ItemCount min={1} max={producto.stock}/>
    </Card.Footer> </div>)}
     </Card> 
}

export default Items