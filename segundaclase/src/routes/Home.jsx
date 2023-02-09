import React from "react";
 import { Link, Outlet } from "react-router-dom";
 import { items } from "../data/datos";

export default function Home(){
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
        <h1>Home</h1>

        <div>
            
             {items.map(item => 
                <div><Link to={`/contacts/${item.id}`}> {item.nombre} </Link></div>)
            } 
        </div>

            <div>
                <Outlet />
            </div>
        </>
    )
}