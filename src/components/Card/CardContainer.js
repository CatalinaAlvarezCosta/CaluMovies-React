import React from 'react'
import Cards from './Card'
import CardColumns from 'react-bootstrap/CardColumns'
import ItemCount from './ItemCount'

const dataCardUno = {
    titulo:'Mujer Bonita',
    subtitulo: 'Un elegante empresario,Edward Lewis,hace el esmerado intento de adaptar a una mujer llamada Vivían Ward a las reglas de una sofisticada empresa de negocios.',
    stock: 4,
    src: "Fotos/mujerbonita.jpg"
}
const dataCardDos = {
    titulo:'Notting Hill',
    subtitulo: 'Anna Scott, estrella de cine, y William Thacker, un biblotecario, se conocen en un lugar llamado Notting Hill. Nace un inusitado romance, obstaculizado la prensa y sus propias diferencias.',
    stock: 8,
    src: "Fotos/nottinghill.jpg"
}
const dataCardTres = {
    titulo:'Realmente amor',
    subtitulo: 'Las vidas de varias parejas se entrecruzan en Londres, poco antes de la Navidad, con resultados románticos, divertidos y agridulces.',
    stock: 9,
    src: "Fotos/loveactually.jpg"
}

function CardContainer (){
    return <div>
    <CardColumns>
        <Cards {...dataCardUno}>
        <ItemCount {...dataCardUno}/>
        </Cards>
        <Cards {...dataCardDos}>
        <ItemCount {...dataCardDos}/>
        </Cards>
        <Cards {...dataCardTres}>
        <ItemCount {...dataCardTres}/>
        </Cards>
    </CardColumns></div>
}
export default CardContainer;