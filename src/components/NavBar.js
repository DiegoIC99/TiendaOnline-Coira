import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export function NavBar() {

    return(
        <nav>
            <div className="logo">
                Shop Store
            </div>
            <li>
                <ul><a>Inicio</a></ul>
                <ul><a>Productos</a></ul>
                <ul><a><FontAwesomeIcon icon={faShoppingCart} /></a></ul>
            </li>
        </nav>
    )

}