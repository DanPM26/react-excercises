import React from 'react';
import { useState } from 'react';
import './App.css';
// import Car from './components/clase' // props
import { MyHelloComponent } from './components/clase'; // Clase

import { Header, DidM, Update } from './components/componente';

//update
import Counter2 from './components/counter2';
import Counter1 from './components/counter1';

//unmount
import Container from './components/unmount';

//Boostrap
import ColorSchemesExample from './components/navbar/Navbar';

//estilos .css
import styles from './components/styles.module.css'

function App() {

  const [counter1,setCounter1] = useState(0)
  const increase1 = () => {
    setCounter1(counter1 +1);
  }
  
  const [counter2,setCounter2] = useState(0)
  const increase2 = () => {
    setCounter2(counter2 +1)
  }

  return (
    <div className="App">
      
      {/* boostrap */}
    <ColorSchemesExample />

      {/* Props */}
      {/* <Car color="red" /> */}

      {/* Clase */}
      <section id={styles["especial"]}>
      <MyHelloComponent />
      </section>
      

      {/* componentes */}
      < Header />
      <DidM />
      <Update />

      {/* shouldComponentUpdate(nextProps, nextState) */}
      <div className={styles.box}>
      <Counter1  value={counter1} onClick={increase1}  />
      <Counter2 value={counter2} onClick={increase2} />
      </div>
      
    
     {/* unmount */}
     <Container/>
      

    </div>
  );
}

export default App;
