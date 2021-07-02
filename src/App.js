import logo from "./logo.svg";
import "./App.css";
import "./components/css/styles.css";
import { NavBar } from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function App() {

  let nameCart = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <div className="container">
      <NavBar />
      <ItemListContainer 
        greeting={nameCart}
      />
    </div>
  );
}

export default App;
