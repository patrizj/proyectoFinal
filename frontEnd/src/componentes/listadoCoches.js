import { useState,useEffect } from "react";

function ListadoCoches() {
    const [listadoCoches, setListadoCoches] = useState([])
    let datos;
    

    useEffect(() => {
        fetch("http://localhost:3001/vehiculos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(function mostrarRespuesta(respuesta) {
                return respuesta.json();
            }).then(function mostrarDatos(datos) {
                 setListadoCoches(datos);
            });
    }, [])





    datos = listadoCoches.map(function (vehiculo) {
        return (
            <>
                <div id="card" className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" style={{ height: '10rem' }} src={vehiculo.imagen} alt={vehiculo.modelo} />
                    <div id="card-body" style={{ margin: '1%' }}>
                        <h5 className="card-title">{vehiculo.marca}</h5>
                        <p>Modelo: {vehiculo.modelo}</p>
                        <p>Matrícula: {vehiculo.matricula}</p>
                        <p>Matriculación: {vehiculo.matriculacion}</p>
                        <p>Referencia: {vehiculo._id}</p>
                    </div>
                </div>
            </>
        )
    });

    return (
        <>
            <div className="App">
                <h1 className="titulos">Vehículos disponibles</h1>
                <div id="print">
                    {datos}
                </div>
            </div>
        </>
    )
}
export default ListadoCoches;