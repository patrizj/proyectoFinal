import { useState } from "react";


function Usuario(props) {
    let [inputValue, setInputValue] = useState("")

    function checkUsuario() {
        if (inputValue==="Patricia") {
            props.actualizarAdmin()
        }
    }

    const handleChange = (event) => {
       
        setInputValue(event.target.value)
    }

    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" onChange={handleChange} placeholder="Usuario" aria-label="LogIn" />
            <button className="btn btn-outline-success" type="button" onClick={checkUsuario}>Acceder</button>
        </form>
    )
}


export default Usuario;