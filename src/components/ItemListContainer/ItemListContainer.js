import React from 'react'

function ItemListContainer(props) {
  const { titulo } = props
  return ( <div>
    <h1>{titulo}</h1>
  </div> )
}

export default ItemListContainer;
