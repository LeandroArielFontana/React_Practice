import React, { useState } from 'react';

let red = 0;
let green = 200;
let blue = 150;

// ? Estilo para usuario logueado
const loggedStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`, 
    color: 'white',
    fontWeight: 'bold'
};

// ? Estilo para usuario no logueado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
};

//Login / Logout buttons
const LoginButton = ({loginAction, propStyle}) => {
    return (<button style={ propStyle } onClick={ loginAction }>Login</button>)
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return (<button style={ propStyle } onClick={ logoutAction }>Logout</button>)
}

// ? (Expresion true) && elemento => Se renderiza la expresion
// ? (Expresion false) && elemento => NO se renderiza la expresion

const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessage, setNmessage] = useState(0);

    // const updateAccess = () => {
    //     setAccess(!access);
    // } 

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }


    let optionalButton; 

    // if(access){
    //     optionalButton = <button onClick={ updateAccess }>Logout</button>
    // }else{
    //     optionalButton = <button onClick={ updateAccess }>Login</button>
    // }

    if(access){
        optionalButton = <LogoutButton propStyle= { unloggedStyle } logoutAction={ logoutAction }></LogoutButton>
    }else{
        optionalButton = <LoginButton propStyle= { loggedStyle } loginAction={ loginAction }></LoginButton>
    }

    // unread messages

    let addMessages = () => {
        setNmessage(nMessage + 1);
    }

    return (
        <div>
            {/* optionalButton */}
            { optionalButton }
            {/* N messages unread */}
            {/* { nMessage > 0 && nMessage === 1 && <p>You have { nMessage } new message...</p>}
            { nMessage > 1 && <p>You have { nMessage } new message(s)</p>}
            { nMessage === 0 && <p>There are no new messages</p>} */}
            {/* Ternay Operator */}
            { access ? (
                <div>
                    { nMessage > 0 ? 
                        <p>You have { nMessage } new message{ nMessage > 1 ? 's' : null}...</p> :
                        <p>There are no new messages</p> 
                    }
                    <button onClick={ addMessages }>{nMessage === 0 ? 'Add your first message' : 'Add new Message'}</button>
                </div>) : null }
        </div>
    );
}

export default OptionalRender;
