import React from "react";


 function Contact(){
    const pacientes = [
                 {id:1, name: "Juan", age:15},
                 {id:2, name: "Oscar", age:18},
                 {id:3, name: "Ximena", age:65},
                 {id:4, name: "Liliana", age:35},
                 {id:5, name: "David", age:40},
                 {id:6, name: "Sandra", age:80},
                 {id:7, name: "Pedro", age:75},
                 {id:8, name: "Lito", age:56},
                 {id:9, name: "María", age:32},
                 {id:10, name: "Ricardo", age:26},
             ]


    const menor_Edad = []
    const joven_Edad = []
    const mediana_Edad = []
    const mayor_Edad = []

    pacientes.forEach((paciente,index) => {
        if(paciente.age <= 18 ){
            menor_Edad.push(
                <div key={index} style={{color: 'green'}}>
                    <h2>Nombre: {paciente.name}</h2>
                    <h2>Edad: {paciente.age}</h2>
                </div>
            ) 
        } else if (paciente.age <= 40){
          joven_Edad.push(
            <div key={index} style={{color: 'orange'}}>
            <h2>Nombre: {paciente.name}</h2>
            <h2>Edad: {paciente.age}</h2>
        </div>
          )
        } else if(paciente.age <= 70){
            mediana_Edad.push(
                <div key={index} style={{color: 'yellow'}}>
            <h2>Nombre: {paciente.name}</h2>
            <h2>Edad: {paciente.age}</h2>
        </div>
            )

        } else if(paciente.age > 70){
            mayor_Edad.push(
                <div key={index} style={{color: 'red'}}>
                <h2>Nombre: {paciente.name}</h2>
                <h2>Edad: {paciente.age}</h2>
            </div>
            )

        }
    })

     return (
         <>
         <h1>Hola soy una pagina de Contact</h1>
         {menor_Edad}
         {joven_Edad}
         {mediana_Edad}
         {mayor_Edad}
         </>
     )
 }

export default Contact

