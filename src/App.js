import './App.css';
import React from 'react'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <div className="App">
      <header >
    <NavBar />
      </header>
    <main>
    <ItemListContainer/>
  </main></div>
  );
}

export default App;
