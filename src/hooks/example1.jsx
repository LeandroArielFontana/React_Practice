/**
 * Ejemplo del uso del hook useState
 * 
 * crear un componente de tipo funcion y acceder a su estado privado
 * a traves de un hook y ademas poder modificarlo 
 * */

import React, { useState } from 'react';

const Example1 = () => {

    // valor inicial para un contador
    const initialValue = 0

    // valor inicial para una persona
    const initialPerson = {
        name : 'Leandro',
        email : 'leandro@mail.com' 
    }

    /**
    * queremos que initialValue y initialPerson sean parte del estado del componente para asi
    * poder gestionar su cambio y que este se vea reflejado en la vista del componente la estructura
    * es la siguiente:
    * 
    * const [nombreVariable, funcionACambiar] = useState(valorInicial)
    */

    const [count, setCount] = useState(initialValue);
    const [person, setPerson] = useState(initialPerson);


    /**
    * Funcion para actualizar el estado privado que contiene el contado 
    */

    function increaseCounter(){
        // ? funcionParaCambiar(nuevoValor)
        setCount(count + 1);
    }

    /**
     * Funcion para actualizar el estado de persona en el componente
     */
    function updatePerson(){
        setPerson(
            {
                name: 'Pepe',
                email: 'pepe@mail.com'
            }
        )
    }



    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: { count }</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: { person.name }</h3>
            <h3>EMAIL: { person.email }</h3>
            {/*bloque de botones para actualizar el estado del componente*/}
            <button onClick= {increaseCounter}>Incrementar contador</button>
            <button onClick={ updatePerson}>Actualizar persona</button>
        </div>
    );
}

export default Example1;

