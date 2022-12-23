/**
 * Ejemplo de componente de tipo clase
 * que dispone de los metodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types'

class LifeCycleExample extends Component {
    
    constructor(props) {
        super(props)
        console.log('constructor: Cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('WillMount: Antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DidMount: Justo al acabar del montaje del componente, antes de pintarlos')
    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps: Cuando se reciben nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Sirve para controlar si el componente debe o no actualizarse
         */
        // return true / false
    }

    componentWillUpdate() {
        console.log('WillUpdate: Justo antes de actualizarse')
    }

    componentDidUpdate() {
        console.log('DidUpdate: Justo despues de actualizarse')
    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desaparecer')
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

LifeCycleExample.propTypes = {

}

export default LifeCycleExample;
