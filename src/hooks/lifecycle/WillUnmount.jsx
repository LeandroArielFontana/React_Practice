/**
 * Ejemplo de uso del metodo componentWillUnmount para componente clase
 * y ejemplo de uso de Hooks para componente funcional (cuando desaparece el componente)
 */

import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }

    render() {
        return (
            <div>
                <h1>componentWillUnmount</h1>
            </div>
        );
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        //aca no se pone nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []);

    return (
        <div>
            <h1>componentWillUnmount</h1>
        </div>
    );
}
