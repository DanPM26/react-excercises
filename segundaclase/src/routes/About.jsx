import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'



 function About(){


const [info,setinfo] = useState([])
const getData = async() => {
    const url = 'https://ponyweb.ml/v1/character/all'
    const resp = await axios.get(url)
    setinfo(resp.data.data)
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
            </ul>
        </nav>
        <h1>Esto es un About</h1>
        <div>
        {info.map(x => <div key={x.id}>
            <h1>{x.name}</h1>
             <img src={x.image} alt="" />
            </div> )}
        </div>
        </>
    )
}
export default About