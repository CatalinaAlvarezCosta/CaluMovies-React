import "./App.css";
import React from "react";
import NavBar from "./components/navBar/navBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./components/Cart/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route exact path="/category/:categoryId">
                <ItemListContainer />
              </Route>
              <Route path="/item/:idItems">
                <ItemDetailContainer />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
