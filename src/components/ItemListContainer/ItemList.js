import React ,{ useState}  from 'react'
import {Items} from './Item' 
import Button from 'bootstrap'

export const ItemsList = ({producto}) =>{
    const [filter,setFilter] = useState ('')
    const filterProductos = data => {
        return filter === '' ? data.filter ( producto => producto.type === filter) : data
        };
    return <section className="itemList"> 
     <Button onClick = {() => setFilter ('Romanticas')}> </Button>
     {filterProductos(producto).map((producto,i) => <Items producto={producto} key={i}/>)}
   </section>
}
