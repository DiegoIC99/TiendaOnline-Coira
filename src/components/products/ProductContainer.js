import React from 'react';
import { useState, useEffect } from "react";
import Products from './Products'
import ItemListContainer from '../ItemListContainer'

export default function ProductContainer(props) {

    const [cart,setCart] = useState([]);

    let i_Products = [
        {
            id: '1',
            name: "Zapatillas 1",
            image: "https://assets.adidas.com/images/w_186,h_186,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f39ed73a5d4346a19667ab4400afecf6_9366/zapatillas-ultraboost-summer.rdy-tokyo-unisex.jpg",
            description: "Pisada neutral",
            price: "35.999"
        },
        {
            id: '2',
            name: "Zapatillas 2",
            image: "https://assets.adidas.com/images/w_186,h_186,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f39ed73a5d4346a19667ab4400afecf6_9366/zapatillas-ultraboost-summer.rdy-tokyo-unisex.jpg",
            description: "Pisada neutral",
            price: "27.999"
        },
        {
            id: '3',
            name: "Zapatillas 3",
            image: "https://assets.adidas.com/images/w_186,h_186,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f39ed73a5d4346a19667ab4400afecf6_9366/zapatillas-ultraboost-summer.rdy-tokyo-unisex.jpg",
            description: "Pisada neutral",
            price: "12.999"
        }
    ]

    const addToCart = (data, props) => {

        data.preventDefault();

        let itemExist = '';

        if(cart.length > 0){

            cart.forEach(element => {
                if(element.id == props.id) {
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

        if(itemExist == 'X'){
            
            setCart([...cart])

        }else {
            setCart([...cart, item])
        }
        
    }

    return(
        <>
            <div className="productContainer">
                {
                    i_Products.map(product => {

                        return (
                            <Products 
                                key= {product.id}
                                id= {product.id}
                                name= {product.name}
                                image= {product.image}
                                description= {product.description}
                                addToCart={addToCart}
                                price= {product.price}
                            />
                        )

                    })
                }
            </div>
            {
                <ItemListContainer 
                        greeting={props.greeting}
                        cart={cart}/>
            }
        
        </>
    )
}