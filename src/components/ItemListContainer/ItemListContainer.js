import React from 'react'
import ItemsList from './ItemList'
import CardColumns from 'react-bootstrap/CardColumns'

function ItemListContainer () {
    return <div> <CardColumns> 
        <ItemsList/>
        </CardColumns></div>
}
export default ItemListContainer;