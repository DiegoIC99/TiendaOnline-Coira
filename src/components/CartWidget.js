import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function CartWidget() {

    return (
        <li className="icon__navbar">
            <a type='button' href='/#'>
                <FontAwesomeIcon icon={faShoppingCart} />
            </a>
        </li>
    )

}