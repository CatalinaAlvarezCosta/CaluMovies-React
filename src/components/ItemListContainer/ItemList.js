import React ,{ useState } from 'react'
import { useParams } from 'react-router-dom'
import {Items} from './Item' 


export const ItemsList = ({producto}) =>{
    
    return <section className="itemList"> 
    {producto.map((producto,i) => <Items producto={producto} key={i}/>)}
   </section>
}
