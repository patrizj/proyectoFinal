import ModalCrud from "./modalCrud"
import { useState, useEffect } from "react";

function GestionFlota() {

    const [listadoCoches, setListadoCoches] = useState([]);
    const [seed, setSeed] = useState(1);
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setSeed(Math.random());
        // Refresh the page
        window.location.reload();
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const [vehiculoSelect, setVehiculoSelect] = useState(null);

    useEffect(() => {
        fetch("https://patricia-proyecto-final.onrender.com/vehiculos", {
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


    function eliminarVehiculo(idVehiculo) {
        let nuevo = {
            referencia: idVehiculo,
        };

        fetch("https://patricia-proyecto-final.onrender.com/vehiculos", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/JSON",
            },
            body: JSON.stringify(nuevo)
        })

        // Refresh the page
        window.location.reload();
    }


    function mostrarModal(item) {
        handleShow();
        setVehiculoSelect(item);
    }

    const items = listadoCoches.map(item => {
        return (
            <tr key={item._id}>
                <th scope="row">{item._id}</th>
                <td>{item.matricula}</td>
                <td>{item.marca}</td>
                <td>{item.modelo}</td>
                <td>{item.matriculacion}</td>
                <td>
                    <button onClick={() => mostrarModal(item)} data-toggle="modal" style={{ marginRight: '3%' }} type="button" className="btn btn-warning">Editar</button>
                    <button onClick={() => eliminarVehiculo(item._id)} type="button" className="btn btn-danger">X</button>

                </td>
            </tr>
        )
    })

    return (
        <>
            <div className='App'>
                <h1 className="titulos">Gestión Vehículos</h1>
                <div className="container">
                    <div style={{ textAlign: '-webkit-left' }}>
                        <button onClick={() => mostrarModal(null)} data-toggle="modal" style={{ marginRight: '90%' }} type="button" className="btn btn-success">Insertar</button>
                    </div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Identificador</th>
                                <th scope="col">Matricula</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Modelo</th>
                                <th scope="col">Matriculación</th>
                                {/* <th>Imagen</th> */}
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                </div>
            </div>
            <ModalCrud show={show} onHide={handleClose} vehiculo={vehiculoSelect} key={seed} />
        </>
    )
}

export default GestionFlota;