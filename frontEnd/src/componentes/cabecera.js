import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '.././logo.png';
import Usuario from "./usuario";


function Cabecera() {

    let [isAdmin, setAdminValue] = useState(false)

    function enableAdmin() {
        setAdminValue(true)
    }

    function disableAdmin() {
        setAdminValue(false)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img src={logo} alt="Logo" width="28" height="24" style={{ marginRight: '0.5rem' }} className="d-inline-block align-text-top" />
                    Compraventa
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-decoration-none">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/venta" className="nav-link text-decoration-none">
                                Vende tu coche
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacto" className="nav-link text-decoration-none">
                                Contacto
                            </Link>
                        </li>
                        {isAdmin ?
                            <li className="nav-item">
                                <Link to="/gestion" className="nav-link text-decoration-none">
                                    <button type="button" className="position-relative badge text-bg-light">
                                        Gestion de flota
                                        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </button>
                                </Link>
                            </li> :
                            <></>}
                    </ul>
                    {isAdmin ?
                        <button className="btn btn-outline-danger" type="button" onClick={disableAdmin}>Salir</button>
                        :
                        <Usuario actualizarAdmin={enableAdmin} />
                    }
                </div>
            </div>
        </nav>
    )
}

export default Cabecera;
