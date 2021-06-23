import React ,{ useState } from 'react'
import {Items} from './Item' 


export const ItemsList = ({producto}) =>{
    const [filter,setFilter] = useState ('')
    const dataFiltrada = data =>{
        return filter !== '' ? data.filter ( data => data.type === filter) : data }
    return <section className="itemList">  <div> <div type='button' onClick={()=> setFilter('romantica')}>Romantica</div>
    <div type='button'onClick={()=> setFilter('comedia')}>Comedia</div>
    <div type='button' onClick={()=> setFilter('')}>Ver Todo</div></div>
    {dataFiltrada(producto).map((producto,i) => <Items producto={producto} key={i}/>)}
   </section>
}
