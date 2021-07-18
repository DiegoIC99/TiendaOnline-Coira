import React from 'react';
import { useState,useEffect, useRef } from "react";
import ItemListContainer from '../ItemListContainer'
import Items from './Items'


export default function ProductContainer(props) {

    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(0);
    const firstRender = useRef(true);

    const addToCart = (data, props) => {

        data.preventDefault();

        let itemExist = '';

        if(cart.length > 0){

            cart.forEach(element => {
                if(element.id === props.id) {
                    element.qty = parseFloat(element.qty) + parseFloat(data.target[1].value);

                    itemExist = 'X';
                }
            })

        }

        let item = {
            product: props.name,
            image: props.image,
            description: props.description,
            price: props.price,
            id: props.id,
            qty: data.target[1].value
        }

        if(itemExist === 'X'){
            setCart(cart)
        }else {
            setCart([...cart, item])
        }

        setTotal( total + (data.target[1].value*props.price) )
        
    }

    useEffect(() => {

        if(!firstRender.current){
            alert('El item fue agregado con exito')
        }else {
            firstRender.current = false;
        }

    }, [cart])

    return(
        <>
            <div className="productContainer">
                {
                    <Items 
                        addToCart={addToCart}/>
                }
            </div>
            {
                <ItemListContainer 
                    greeting={props.greeting}
                    cart={cart}
                    total={total}
                    shown={props.show}/>
            }
        
        </>
    )
}