/**
* Ejemplo Hooks: 
* 
* - useState()
* - useContext()
*/

import React, { useState, useContext } from 'react';

/**
 *
 * @returns Componente 1 
 * dispone de un contexto que va a tener un valor 
 * que recibe desde el padre
 */

// Inicializamos vacio ya que va a llenarse con los datos del padre
const myContext = React.createContext(null)

const ComponentOne = () => {
    const state = useContext(myContext);

    return (
        <div>
            <h1>
                El token es: { state.token }
            </h1>
            {/* Colocamos el componente 2 */}
            <ComponentTwo></ComponentTwo>
        </div>
    );
}

const ComponentTwo = () => {

    const state = useContext(myContext);

    return (
        <div>
            <h2>
                La sesion es: { state.session }
            </h2>
        </div>
    );
}

export default function MyComponentWithContext(){
    
    const initialState = {
        token: '1234567',
        session: 1
    }

    // Creamos el estado de este componente

    const [dataSession, setDataSession] = useState(initialState);

    function updateSession(){
        setDataSession(
            {
                token: 'jwt123456789',
                session: dataSession.session + 1
            }
        );
    }

    return (
        <myContext.Provider value = {dataSession}>
            {/** Todo lo que esta aca adentro puede leer los datos de dataSession */}
            {/** Ademas si se actualizan los componentes de aca, tambien lo actualizan */}
            <h1>*** Ejemplo de useState() y useContext() ***</h1>
            <ComponentOne></ComponentOne>
            <button onClick= { updateSession }>Actualizar sesion</button>
        </myContext.Provider>
    )
}

