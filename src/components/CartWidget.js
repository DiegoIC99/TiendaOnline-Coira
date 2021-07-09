import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function IconNavbar() {

    return (
        <li className="icon__navbar">
            <FontAwesomeIcon icon={faShoppingCart} />
        </li>
    )

}