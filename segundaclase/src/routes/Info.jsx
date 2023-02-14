import React from "react";
import { Link } from "react-router-dom";
import Example from "./Componentes-hooks/useEffect";
import Reduc from "./Componentes-hooks/useReducer";
import Multiplicacion from "./Componentes-hooks/useMemo";
function Info(){
    return(
        <>
           <nav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
                <li>
                    <Link to={'/info'}>Info</Link>
                </li>
            </ul>
        </nav>
       <h1>Hola, aquí vamos a probar los hooks</h1>
       <Example />
       <Reduc />
       <Multiplicacion />
      
        </>
    )
}

export default Info

