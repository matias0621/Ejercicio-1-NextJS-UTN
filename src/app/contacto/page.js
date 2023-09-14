"use client"
import { useRef, useState } from "react"

export default function Page(){
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef = useRef(null)
    const [successMessage, setSuccessMessage] = useState("")

    const formulario = (e) =>{
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;

        console.log(`Nombre: ${name}`)
        console.log(`Email: ${email}`)
        console.log(`Mensaje: ${message}`)

        setSuccessMessage("Se enviaron los datos con exito")
    }

    
    return(
        <>
            <h1>Soy la pagina de contacto</h1>
            <h3>Contactanos por Whattsapp (+54 223 789-4561)</h3>
            <h3>Contactanos por mail con NegocioFalso123@gmail.com</h3>
            <h3>Seguinos en nuestro Instagram @NegocioFalso123</h3>
            <br></br>


            <section>
                <h2>Contacto</h2>
            <br></br>

                <form onSubmit={formulario}>
              <section>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" ref={nameRef} />
             </section>
            <br></br>

            <section>
                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" id="email" ref={emailRef} />
            </section>
            <br></br>

            <section>
                <label htmlFor="message">Mensaje:</label>
                <input type="text" id="message" ref={messageRef} />
            </section>
            <br></br>

                 <button type="submit">Enviar</button>
                 </form>
                 <br></br>

                 {successMessage && <p>{successMessage}</p>}
           </section>

        </>
    )
}