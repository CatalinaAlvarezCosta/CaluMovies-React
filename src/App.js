
import './App.css';
import React from 'react'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CardContainer from './components/Card/CardContainer'

function App() {
  return (
    <div className="App">
      <header >
    <NavBar />
      </header>
    <main>
   <CardContainer/>
     <ItemListContainer greeting="Hola Mundo!"/>
  </main></div>
  );
}

export default App;
