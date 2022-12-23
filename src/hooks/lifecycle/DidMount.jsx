/**
 * Ejemplo de uso de ciclo de vida en componente clase
 * y el hook de ciclo de vida en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el componente renderice en el DOM');
    }
    
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido en el DOM');
    }, []);

    // entre corchetes vacios indicamos que esto se ejecutaria solo 1 vez

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}


