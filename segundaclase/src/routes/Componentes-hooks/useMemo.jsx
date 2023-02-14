import React, { useMemo } from "react";

function pasarMulti(a,b){
    return a * b
}

function Multiplicacion(){
    const change = true;
     const memorizarMulti= useMemo(() => pasarMulti(2,2), [change])
     return (
        <h1> {memorizarMulti}</h1>
     )
}

export default Multiplicacion