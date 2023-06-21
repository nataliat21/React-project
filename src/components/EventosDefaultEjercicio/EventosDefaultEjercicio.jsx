import { useState } from "react"
export const EventosDefault = () => {

    const [statusForm, setStatusForm] = useState("")

    const sendForm = (event) => {
        event.preventDefault()
        console.log("formulario enviado")
        setStatusForm("Formulario enviado con exito")
    }
    return(
        <div>
            <p>Pagina de contacto</p>
            <form onSubmit={sendForm}>
                <input type="text" placeholder="nombre"></input>
                <button type="submit">Enviar formulario</button>
                <h1>{statusForm}</h1>
            </form>
        </div>
    )
}




 // useEffect(() => {
    //     window.addEventListener("click",IncrementCounter)
    //     window.addEventListener("click",DecrementCounter)
    //     return() => {
    //         window.removeEventListenerEventListener("click",IncrementCounter)
    //         window.removeEventListener("click",DecrementCounter)
    //     }
    // }, [])