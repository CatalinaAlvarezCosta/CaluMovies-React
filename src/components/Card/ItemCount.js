
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'

const ItemCount = props => {
  const minimo = 1
  const [buttonDisabled2, setButtonDisabled2] = useState(false);
  const [buttonDisabled1, setButtonDisabled1] = useState(false);
  const[count,setCount] = useState(1);

  function handleChangeAdd() { 
         handleChangeDisabled2();
      setCount(count + 1);
      handleChangeDisabled1()
  };
  function handleChange() {
    handleChangeDisabled1();
      setCount(count - 1);
       handleChangeDisabled2()
  };
  function handleChangeDisabled1(){
   if (count === minimo){
    setButtonDisabled1(true);
  }else if (count > minimo ){
    setButtonDisabled1(false);}}

    function handleChangeDisabled2(){
      if (count === props.stock - 1){
        setButtonDisabled2(true);
      }else if (count < props.stock - 1){
        setButtonDisabled2(false);}
    }

    return <div>
       <Button className="d-inline" type="button" onClick={ e=> handleChange()} variant="light" disabled={buttonDisabled1}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  className="bi bi-dash resta" viewBox="0 0 16 16">
      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
      </svg> </Button> <p  className="d-inline" >{count}</p> <Button className="d-inline" type="button" variant="light" disabled={buttonDisabled2} onClick={ e=> handleChangeAdd()}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus suma" viewBox="0 0 16 16">
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg>  </Button>
    <button className="botonAgregar"  >AGREGAR AL CARRITO</button></div>
}
export default ItemCount;