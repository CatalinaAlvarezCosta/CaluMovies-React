import React ,{ useEffect, useState }  from 'react'
import {Items} from './Item' 
import Button from 'bootstrap'
export const ItemsList = ({producto}) =>{
    const [productos, setProducto] = useState([]);
    const [filter,setFilter] = useState ('')
    

    const promiseProductos= () =>{
        return new Promise ((resolve,reject)=>{
            setTimeout(() => resolve(
                    producto),
                2000
            ); }); };
      const filterProductos = () => {
            return filter === '' ? producto.filter ( productos => productos.type === filter) : productos
            }
        useEffect(() =>{
            promiseProductos().then((productos) => {setProducto(productos) });
        },[]); 
        
    return <section className="itemList"> 
    <Button onClick = {() => setFilter ('Romanticas')}>  </Button>
     {
        filterProductos(productos).map((producto,i) => <Items producto={producto} key={i}/>)}
   </section>
}
