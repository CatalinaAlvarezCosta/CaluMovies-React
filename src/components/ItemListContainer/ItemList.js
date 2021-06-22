import React  from 'react'
import {Items} from './Item' 


export const ItemsList = ({producto}) =>{
    
    return <section className="itemList"> 
    {producto.map((producto,i) => <Items producto={producto} key={i}/>)}
   </section>
}
