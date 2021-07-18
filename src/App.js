import "./App.css";
import "./components/css/styles.css";
import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { NavBar } from "./components/NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ProductsContainer from './components/products/ProductContainer'

function App() {

  const [show,setShow] = useState(false);

  let textCart = `Carrito de compras`;
  let nameCart = <div><FontAwesomeIcon icon={faShoppingCart} /> {textCart}</div>;

  const showCart = (value) => {

    setShow(value)

  }

  return (
    <Router>
      <div className="container">
        <NavBar 
            showCart={show}
            stateShow={showCart} />
        <Switch>
          <Route path="/" exact component={ () => <ProductsContainer greeting={nameCart} show={show} />}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
