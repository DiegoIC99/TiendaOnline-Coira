import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

export function NavBar(props) {

    return(
        <header>
            <nav>
                <div className="logo">
                    Shop Cart
                </div>
                <ul>
                    <li>
                        <NavLink to='/' activeClassName='active'>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to='/productos' activeClassName='active'>Productos</NavLink>
                    </li>
                    <li className="icon__navbar">
                        <a type='button' href='/#' onClick={() => {props.stateShow( props.showCart === true ? false : true)}}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )

}