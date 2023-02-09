import React from "react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getContact } from "../data/datos";

export default function Contacts(){
    const params = useParams();

    const contactos = useMemo(() => getContact(params.contactid), [params.contactid]);

    if(!contactos){
        throw new Error("El contacto no existe")
    }

    return(
        <div>
            {/* <h1>Contacto12</h1> */}
              <h2>{contactos.nombre}</h2>
              <h2>{contactos.telefono}</h2> 
         {/* <h1>{contactos.nombre}</h1> */}

            
        </div>
    )
}