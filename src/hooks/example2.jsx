/**
 * Ejemplo de uso de :
 * - useState()
 * - useRef() -> sirve para referenciar elementos dentro de la vista
 * - useEffect() -> sirve para controlar los cambios en la vista
 */

import React, { useState, useEffect, useRef } from 'react';

const Example2 = () => {

    // Vamos a crear 2 contadores distintos, cada uno en un estado diferente

    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    // Vamos a crear una referencia con useRef para asociar una variable con un elemento del DOM

    const myRef = useRef();

    function increaseOne(){
        setCountOne(countOne + 1)
    }

    function increaseTwo(){
        setCountTwo(countTwo + 1)
    }

    /**
    * Trabajando con useEffect
    */

    /** 
    * ? caso 1: Ejecutar SIEMPRE un snippet de codigo   
    * Cada vez que haya un cambio en el estado del componente se ejectua todo codigo que este adentro del useEffect()
    * 
    *   useEffect(() => {
        console.log('CAMBIO DE ESTADO DEL COMPONENTE');
        console.log('Mostrando una referencia a elemento del DOM:');
        console.log(myRef)   
        })
    */
     
    /**
    * ? Caso 2: Ejecutar solo en algunos casos (cuando se cambie el contador 1)
    * Cada vez que haya un cambio en contador 1 se ejecuta lo que esta en useEffect(), caso contrario no pasara nada
        * useEffect(() => {
            console.log('CAMBIO DE ESTADO DEL CONTADOR 1');
            console.log('Mostrando una referencia a elemento del DOM:');
            console.log(myRef) 
        }, [countOne]);

    */

    /**
    * ? Caso 3: Ejecutar solo cuando cambie CONTADOR 1 o CONTADOR 2 
    * Cada vez que haya un cambio en contador 1 o contador 2 se ejecutara lo que esta en useEffect()
    */

    useEffect(() => {
        console.log('CAMBIO DE ESTADO DEL CONTADOR 1 / CONTADOR 2');
        console.log('Mostrando una referencia a elemento del DOM:');
        console.log(myRef) 
    }, [countOne, countTwo]);

    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>CONTADOR 1: { countOne }</h2>
            <h2>CONTADOR 2: { countTwo }</h2>
            {/* Elemento referenciado */}
            <h4 ref= { myRef }>
                Ejemplo de elemento referenciado
            </h4>

            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick= { increaseOne }>Incrementar contador 1</button>
                <button onClick= { increaseTwo }>Incrementar contador 2</button>
            </div>

        </div>
    );
}

export default Example2;
