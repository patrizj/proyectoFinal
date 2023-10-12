import { useState,useEffect } from "react";
import CalcularTexto from "./calcularTextoVenta";


function FormularioVentas() {
    let [anoValue, setAnoValue] = useState(0)
    let [matriculaValue, setMatriculaValue] = useState("")
    let [kmValue, setKmValue] = useState(0)
    let [listadoMarcas, setListadoMarcas] = useState([])
    let [listadoModelos, setListadoModelos] = useState([])
    

    useEffect(() => {
        fetch("https://patricia-proyecto-final.onrender.com/marcas", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(function mostrarRespuesta(respuesta) {
                return respuesta.json();
            }).then(function mostrarDatos(datos) {
                 setListadoMarcas(datos);
            });
    }, [])


    
    let mostrarMarcas = listadoMarcas.map(function (marca) {
        return (
            <option value={marca._id}>{marca.nombre}</option>
        )
    })

    let mostrarModelos = listadoModelos.map(function (marca) {
        return (
            <option value={marca._id}>{marca.nombre}</option>
        )
    })

    const onMarcaChangeHandler = (event) => {
        getModelos(event.target.value);
    }

    function getModelos(marcaId){
        fetch(`https://patricia-proyecto-final.onrender.com/modelos?id=${marcaId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(function mostrarRespuesta(respuesta) {
                return respuesta.json();
            }).then(function mostrarDatos(datos) {
                setListadoModelos(datos);
            });
    }

    const onAnoChangeHandler = (event) => {
        setAnoValue(event.target.value)
    }

    const onMatriculaChangeHandler = (event) => {
        setMatriculaValue(event.target.value)
    }

    const onKmChangeHandler = (event) => {
        setKmValue(event.target.value)
    }

    return (
        (
            <>
                <div className="App">
                    <h1 className="titulos">Introduce los datos tu vehículo</h1>
                    <div className="grid-container container">
                        <div className="grid-item">
                            <div className="form-floating" style={{ width: "40%", marginBottom: "1%" }}>
                                <select onChange={onMarcaChangeHandler} className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option selected disabled>Seleccionar</option>
                                    {mostrarMarcas}
                                </select>
                                <label for="floatingSelect">Marca</label>
                            </div>
                            <div className="form-floating" style={{ width: "40%", marginBottom: "1%" }} >
                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option selected disabled>Seleccionar</option>
                                    {mostrarModelos}
                                </select>
                                <label for="floatingSelect">Modelo</label>
                            </div>

                            <div className="input-group form-floating" style={{ width: "40%", marginBottom: "1%" }}>
                                <span className="input-group-text">Año</span>
                                <input onChange={onAnoChangeHandler} type="number" min="1950" max="2023" aria-label="Ano" className="form-control" />
                            </div>
                            <div className="input-group form-floating" style={{ width: "40%", marginBottom: "1%" }}>
                                <span className="input-group-text">Matrícula</span>
                                <input onChange={onMatriculaChangeHandler} maxLength={7} type="text" aria-label="Matricula" className="form-control" />
                            </div>
                            <div className="input-group form-floating" style={{ width: "40%", marginBottom: "1%" }}>
                                <span className="input-group-text">Kilometraje</span>
                                <input onChange={onKmChangeHandler} type="number" aria-label="kilometraje" className="form-control" />
                            </div>
                        </div>

                        <div className="grid-item">
                            <CalcularTexto ano={anoValue} matricula={matriculaValue} km={kmValue} />
                        </div>
                    </div>
                </div>
            </>
        )
    )
}

export default FormularioVentas;