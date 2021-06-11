import React from 'react'
import Items from './Item'
import ItemCount from '../ItemCount'

const dataCardUno = {
    titulo:'Mujer Bonita',
    subtitulo: 'Un elegante empresario,Edward Lewis,hace el esmerado intento de adaptar a una mujer llamada Vivían Ward a las reglas de una sofisticada empresa de negocios.',
    stock: 4,
    src: "Fotos/mujerbonita.jpg",
    precio:1000
}
const dataCardDos = {
    titulo:'Notting Hill',
    subtitulo: 'Anna Scott, estrella de cine, y William Thacker, un biblotecario, se conocen en un lugar llamado Notting Hill. Nace un inusitado romance, obstaculizado la prensa y sus propias diferencias.',
    stock: 8,
    src: "Fotos/nottinghill.jpg",
    precio:1200
}
const dataCardTres = {
    titulo:'Realmente amor',
    subtitulo: 'Las vidas de varias parejas se entrecruzan en Londres, poco antes de la Navidad.Esta encantadora comedia romántica cuenta diez historias de amor entrelazadas.',
    stock: 9,
    src: "Fotos/loveactually.jpg",
    precio:870
}

function ItemsList (){
    return <div>
   
        <Items {...dataCardUno}>
        <ItemCount min={1} max={dataCardUno.stock}/>
        </Items>
        <Items {...dataCardDos}>
        <ItemCount min={1} max={dataCardDos.stock} />
        </Items>
        <Items {...dataCardTres}>
        <ItemCount min={1} max={dataCardTres.stock} />
        </Items>
   </div>
}
export default ItemsList;