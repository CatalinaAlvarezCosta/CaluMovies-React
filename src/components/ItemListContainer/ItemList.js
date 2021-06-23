import React ,{ useState } from 'react'
import { useParams } from 'react-router-dom'
import {Items} from './Item' 


export const ItemsList = ({producto}) =>{
    const [filter,setFilter] = useState ('') 
    const {categoryId} = useParams()
    const dataFiltrada = data =>{
        return filter !== '' ? data.filter ( data => data.type ===  categoryId) : data }
    return <section className="itemList"> 
    {dataFiltrada(producto).map((producto,i) => <Items producto={producto} key={i}/>)}
   </section>
}
