import './App.css';
import React from 'react'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Switch ,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <NavBar />
    <main>
   <Switch>
     <Route  exact path="/">
     <ItemListContainer />
     </Route>
     <Route exact path="/category/:categoryId" >
     <ItemListContainer />
     </Route>
     <Route  path="/item/:idItems">
       <ItemDetailContainer />
     </Route>
   </Switch>
  </main>
  </BrowserRouter></div>
  );
}

export default App;
