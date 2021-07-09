import React from 'react'
import ItemsCart from './cart/ItemsCart'

export default function ItemListContainer(props) {

    let cart = props.cart;
    return(
        <div className="contCart">
            <h1>{props.greeting}</h1>
            <div className="fill__cart">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio unitario</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        cart.map((element, index) => {

                                return(
                                    <ItemsCart 
                                            key={index}
                                            name={element.product}
                                            qty={element.qty}
                                            price={element.price}/>
                                )
                                
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
