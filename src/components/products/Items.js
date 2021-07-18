import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Products from './Products'

export default function Items(props) {

    const [productos,setProductos] = useState([]);
    const firstRender = useRef(true);

    const getProducts = async () =>
    {
        /**Declarando el fetch */
        let llamada = fetch('http://localhost:4000/Products');
        /**llamando al servidor */
        let data = await llamada;
        /**procesar la respuesta */
        // console.log(data);
        data = await data.text();
        data = JSON.parse(data);

        setProductos(data);
        
    }

    useEffect(()=>{

        if(firstRender.current) {
            getProducts();

            firstRender.current = false;
        }
    })

    return (
        <>
            {
                productos.map(product =>{
                    return( 
                        <Products 
                            key= {product.id}
                            id= {product.id}
                            name= {product.tittle}
                            image= {product.image}
                            description= {product.descripcion}
                            addToCart={props.addToCart}
                            price= {product.price}
                        />
                    )
                })
            }
        </>
    )

}