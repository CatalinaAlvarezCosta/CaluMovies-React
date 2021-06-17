import React ,{ useEffect, useState }  from 'react'
import {Items} from './Item' 

export const ItemsList = ({producto}) =>{
    const [productos, setProducto] = useState([]);
    const promiseProductos= () =>{
        return new Promise ((resolve,reject)=>{
            setTimeout(() => resolve(
                    producto),
                2000
            ); }); };
        useEffect(() =>{
            promiseProductos().then((productos) => {setProducto(productos) });
        },[]); 
    return <section className="itemList">  {productos.map((producto,i) => <Items producto={producto} key={i}/>)}
   </section>
}
