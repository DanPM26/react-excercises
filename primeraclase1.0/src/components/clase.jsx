import React from "react";

//------------- Props-----------
// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.color} Car!</h2>;
//   }
// }


// export default Car
//------------- Clase-----------
//------ El problema con las clases ---------
// export class MyHelloComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { myText: "hello" };
//     }
  
//     onChangeText() {        
//       this.setState({ myText: "world" });
//     }
  
//     render() {
//       return (
//         <>
//           <h3>{this.state.myText}</h3>
//           <button onClick={this.onChangeText}>Change text</button>
//         </>
//       );
//     }
//   }
//---------- Cómo debe quedar----------
export class MyHelloComponent extends React.Component {
    constructor(props) {

    //  Algo importante, no puedes usar this en un constructor hasta <después> que se haya llamado al constructor base. Javascript no te lo permitirá:
    // Aquí no iría un this

      super(props); //primero el se hace referencia al constructor, este hace referencia al constructor de la clase base (en nuestro ejemplo, apunta a la implementación de React.Component).

    
      this.state = { myText: "hello" };

    //.bind()crea una nueva función, que cuando es llamada, asigna a su operador this el valor entregado, con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada.
     this.onChangeText = this.onChangeText.bind(this);
    }
  
    onChangeText() { 
       
        //Permite el cambio de estado en el componente clase
      this.setState({ myText: "world" });
    }
  
    render() {
      return (
        <>
          <h3>{this.state.myText}</h3>
          <button onClick={this.onChangeText}>Change text</button>
        </>
      );
    }
  }

  //