import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

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
                        <div className="pr__btnsQty">
                            <button type='button' onClick={() => {setQty(qty + 1)}}><FontAwesomeIcon icon={faPlus} style={{fontSize: '12px'}} /></button>
                            <input type='number' disabled value={qty} />
                            <button type='button' onClick={() => { qty > 1 ? setQty(qty - 1) : setQty(qty)}}><FontAwesomeIcon icon={faMinus} style={{fontSize: '12px'}} /></button>
                        </div>
                        <button type='submit' className='btn__submit'>Sumar al carrito</button>
                    </form>
                </div>
                <div className="pr__price">
                    ${props.price}
                </div>
            </div>
        </>

    )

}