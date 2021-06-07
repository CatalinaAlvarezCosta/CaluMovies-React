import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'

function ItemCount (){
  let disabled= false
  
  const[count,setCount] = useState(0);
  const handleChangeAdd = () => {
    setCount(count+1)
  }
  const handleChange = () => {
    setCount(count-1)
  }
  

    return <div>
       <div className="d-inline" type="button" onClick={e => handleChange()} disabled={disabled}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  className="bi bi-dash resta" viewBox="0 0 16 16">
      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
      </svg> </div> <span  className="d-inline" >{count}</span> <div className="d-inline" type="button" disabled={disabled} onClick={e => handleChangeAdd()}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus suma" viewBox="0 0 16 16">
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg>  </div>
    <Button variant="outline-dark" >AGREGAR AL CARRITO</Button></div>
}
export default ItemCount;