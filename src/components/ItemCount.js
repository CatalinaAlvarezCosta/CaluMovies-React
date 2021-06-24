
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

const ItemCount = ({min,max,idProducto})=> {
  const history = useHistory()

  const [minusDisabled, setMinusDisabled] = useState(false);
  const [addDisabled, setAddDisabled] = useState(false);
  const[count,setCount] = useState(min);

  
  const handleChangeAdd = () => { 
    if(count < max) {
      setCount(count +1);
      setMinusDisabled(false)}
   else if (count === max) {setAddDisabled(true);}
      else {setAddDisabled(false)
  }};

  const handleChangeMinus = () => {
    if(count > min) {
      setCount(count - 1);
      setAddDisabled(false);}
     else if (count === min){ setMinusDisabled(true);}
     else  setMinusDisabled(false);}
 
   const changeStyle =() => {
    var e = document.getElementById(`${idProducto}Terminar`)
    var d = document.getElementById(`${idProducto}Agregar`)
    if(e.style.display == 'none')
          e.style.display = 'block';
          d.style.display = 'none';
       ;}
      const cancelChangeStye = () =>{
        var e = document.getElementById(`${idProducto}Terminar`)
        var d = document.getElementById(`${idProducto}Agregar`)
        if(e.style.display == 'block')
          e.style.display = 'none';
          d.style.display = 'block';
       }
       
const styleButton ={
  display: 'none'
}
    return <div>  <div id={`${idProducto}Agregar`}>
       <Button className="d-inline" type="button" onClick={ e=> handleChangeMinus()} variant="light" disabled={minusDisabled}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  className="bi bi-dash resta" viewBox="0 0 16 16">
      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
      </svg> </Button> <p  className="d-inline" >{count}</p> <Button className="d-inline" type="button" variant="light" disabled={addDisabled} onClick={ e=> handleChangeAdd ()}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus suma" viewBox="0 0 16 16">
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg>  </Button>
    <button className="botonAgregar" onClick={e => changeStyle()} >AGREGAR AL CARRITO</button></div>
    <div id={`${idProducto}Terminar`} style={styleButton} > <Button variant="outline-dark" onClick ={e => history.push ('/cart')} className="finalizarButton">Finalizar Compra</Button>{' '}
    <Button variant="outline-danger" onClick ={e => cancelChangeStye()} >Cancelar</Button>{' '}
    </div>
    </div>
   
}
export default ItemCount;