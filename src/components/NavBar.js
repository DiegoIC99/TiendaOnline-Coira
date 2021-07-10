import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export function NavBar(props) {

    return(
        <header>
            <nav>
                <div className="logo">
                    Shop Store
                </div>
                <ul>
                    <li><a href='/#'>Inicio</a></li>
                    <li><a href='/#'>Productos</a></li>
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