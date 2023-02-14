import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


 function About(){

     const [info,setinfo] = useState([])

     const getData = async() => {
         const url = 'https://www.amiiboapi.com/api/amiibo/?character=zelda&showusage'
         const resp = await axios.get(url)
         setinfo(resp.data.amiibo)
         console.log(resp.data)
     }

     useEffect(() => {
         getData();
     },[])
    
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
            <h1>Esto es un About</h1>
            <div>

              {info.map(x => 
              <Card key={x.id} style={{ width: '18rem' }}>
               <Card.Img variant="top" src={x.image} />
               <Card.Title>{x.character}</Card.Title>
              
               <Button variant="primary">Conocer más</Button>
            
              </Card>
             )}  
  

            </div>
            
            <div>
        
            </div>
            </>
        )

}

export default About