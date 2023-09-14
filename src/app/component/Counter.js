"use client";
import { useState } from "react"

export default function Counter(){
    let [contador, setContador] = useState(0);

    const incrementarContador = () =>{
        setContador(contador + 1);
    }
    
    return(
        <>
            <section>
                <h1>Contador</h1>
                <p>El contador es igual a {contador}</p>
                <button onClick={incrementarContador}>Sumar</button>
            </section>
        </>
    )
}