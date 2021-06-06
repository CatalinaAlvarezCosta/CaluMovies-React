
import './App.css';
import React from 'react'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header >
    <NavBar />
      </header>
    <body>
     <ItemListContainer greeting="Hola Mundo!"/>
  </body></div>
  );
}

export default App;
