import "./App.css";
import "./components/css/styles.css";
import { NavBar } from "./components/NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import ProductsContainer from './components/products/ProductContainer'

function App() {

  let textCart = `Carrito de compras`;
  let nameCart = <div><FontAwesomeIcon icon={faShoppingCart} /> {textCart}</div>;

  return (
    <div className="container">
      <NavBar />
      <main>
        <ProductsContainer greeting={nameCart}/>
      </main>
    </div>
  );
}

export default App;
