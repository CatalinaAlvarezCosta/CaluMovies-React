import React from 'react'
import {Items} from './Item'


export const ItemsList = ({producto,i}) =>{
    
    return <div>
    <Items key={i} producto={producto}/> 
   </div>
}
