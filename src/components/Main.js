import  { useState } from "react";
import { Frase } from "./Frase";
export const Main=()=>{
    const [frase,setFrase]=useState({}); 
    const consultarApi=async()=>{
        const api=await fetch('https://fehernandez.com/pokedux/');
        const quote= await api.json();
        console.log(quote);
        setFrase(quote[0]);
    }
  //  return(
  //      <>
  //      <h1>Pockemon</h1>
  //      {frase.quote!=null &&
  //          (<Frase frase={frase}/>)
  //      }
  //      <button onClick={consultarApi}>
  //          Siguiente
   //         </button>

   //     </>
   // )
}