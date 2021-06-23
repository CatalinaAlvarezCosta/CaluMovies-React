import React ,{ useEffect, useState } from 'react'
import {ItemsList} from './ItemList'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'bootstrap'

function ItemListContainer () {
  const [productos, setProducto] = useState([]);
  const [filter,setFilter] = useState ('')

  const promiseProductos= () =>{
      return new Promise ((resolve,reject)=>{
          setTimeout(() => resolve(
            [
              {titulo:'Mujer Bonita',
              subtitulo: 'Un elegante empresario,Edward Lewis,hace el esmerado intento de adaptar a una mujer llamada Vivían Ward a las reglas de una sofisticada empresa de negocios.',
              stock: 4,
              src: "Fotos/mujerbonita.jpg",
              precio:1000,
              type:'romantica',
              id:1},
            {
              titulo:'Notting Hill',
              subtitulo: 'Anna Scott, estrella de cine, y William Thacker, un biblotecario, se conocen en un lugar llamado Notting Hill. Nace un inusitado romance, obstaculizado la prensa y sus propias diferencias.',
              stock: 8,
              src: "Fotos/nottinghill.jpg",
              precio:1200,
              type:'romantica',
              id:2
            },
            {
              titulo:'Realmente amor',
              subtitulo: 'Las vidas de varias parejas se entrecruzan en Londres, poco antes de la Navidad.Esta encantadora comedia romántica cuenta diez historias de amor entrelazadas.',
              stock: 9,
              src: "Fotos/loveactually.jpg",
              precio:870,
              type:'comedia',
              id:3
            }]),
              2000
          ); }); };
          
          const dataFiltrada = data =>{
         return filter !== '' ? data.filter ( data => data.type === filter) : data }

         useEffect(() =>{ promiseProductos().then((productos) => {setProducto(productos) });
      },[]);
      
    
    return <div><div> <Button onClick={()=> setFilter('romantica')}>Romantica</Button>
    <Button onClick={()=> setFilter('comedia')}>Comedia</Button>
    <Button onClick={()=> setFilter('')}>Ver Todo</Button></div><CardColumns> 
         {dataFiltrada(productos).map(()=> {return <ItemsList producto={productos} /> })}
        </CardColumns></div>
}
export default ItemListContainer;