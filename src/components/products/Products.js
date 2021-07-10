import React from 'react'
import { useState } from 'react'

export default function Products(props) {

    const [qty,setQty] = useState(1); 

    return (

        <>
            <div className="product">
                <div className="pr__title">
                    <h4>
                        {props.name}
                    </h4>
                </div>
                <div className="pr__image">
                    <img src={props.image} alt="Foto Producto"/>
                </div>
                <div className="pr__desc">
                    {props.description}
                </div>
                <div className="pr__Qty">
                    <form onSubmit={(data) => {props.addToCart(data, props)}}>
                        <button type='button' onClick={() => {setQty(qty + 1)}}>+</button>
                        <input type='number' disabled value={qty} />
                        <button type='button' onClick={() => { qty > 1 ? setQty(qty - 1) : setQty(qty)}}>-</button>
                        <button type='submit' className='btnSubmit'>Sumar al carrito</button>
                    </form>
                </div>
                <div className="pr__price">
                    ${props.price}
                </div>
            </div>
        </>

    )

}