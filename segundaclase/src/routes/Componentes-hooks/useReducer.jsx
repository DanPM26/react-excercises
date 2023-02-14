import React, { useReducer } from "react";

const estadoInicial = {count:0};

function Reducir( state, action){
    switch(action.type){
        case 'incrementar':
            return {count: state.count + 1};
        case 'decrementar':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

function Reduc(){
    const [state, despachar ] = useReducer( Reducir , estadoInicial);
    return (
        <>
        Contador: {state.count}
        <button onClick={() => despachar({type: 'decrementar'})}>-</button>
        <button onClick={() => despachar({type: 'incrementar'})}>+</button>
        </>
    )
}

export default Reduc