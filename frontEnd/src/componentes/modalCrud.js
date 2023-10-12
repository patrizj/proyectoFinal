import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function ModalCrud({ show, onHide, vehiculo, key }) {

  let [matriculaValue, setMatriculaValue] = useState("")
  let [marcaValue, setMarcaValue] = useState("")
  let [modeloValue, setModeloValue] = useState("")
  let [matriculacionValue, setMatriculacionValue] = useState()
  let [imagenValue, setImagenValue] = useState("")

  const handleChangeMatricula = (event) => {
    setMatriculaValue(event.target.value)
  }

  const handleChangeMarca = (event) => {
    setMarcaValue(event.target.value)
  }
  const handleChangeModelo = (event) => {
    setModeloValue(event.target.value)
  }
  const handleChangeMatriculacion = (event) => {
    setMatriculacionValue(event.target.value)
  }
  const handleChangeImagen = (event) => {
    setImagenValue(event.target.value)
  }

  function crearVehiculo() {
    let nuevoVehiculo = {
      marca: marcaValue,
      modelo: modeloValue,
      matricula: matriculaValue,
      matriculacion: matriculacionValue,
      imagen: imagenValue
    }

    fetch("https://patricia-proyecto-final.onrender.com/vehiculos", {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(nuevoVehiculo),
    });

    onHide()
  }

  function editarVehiculo() {

    let editarVehiculo = {
      referencia: vehiculo._id,
      marca: marcaValue ===  '' ? vehiculo.marca : marcaValue,
      modelo: modeloValue === '' ? vehiculo.modelo : modeloValue,
      matricula: matriculaValue === '' ? vehiculo.matricula : matriculaValue,
      matriculacion: matriculacionValue === undefined ? vehiculo.matriculacion : matriculacionValue,
      imagen: imagenValue === '' ? vehiculo.imagen : imagenValue,
    }
    
    
    fetch("https://patricia-proyecto-final.onrender.com/vehiculos", {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(editarVehiculo),
    }); 
    onHide() 
  }


  return (
    <>
      {vehiculo == null ?
        <Modal show={show} onHide={onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Crear nuevo registro</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Matrícula</Form.Label>
                <Form.Control required onChange={handleChangeMatricula} type="text" placeholder="1234HLO" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Marca</Form.Label>
                <Form.Control required onChange={handleChangeMarca} type="text" placeholder="Audi" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Modelo</Form.Label>
                <Form.Control required onChange={handleChangeModelo} type="text" placeholder="A3" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Matriculación</Form.Label>
                <Form.Control required onChange={handleChangeMatriculacion} type="number" placeholder="2023" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Imagen (url)</Form.Label>
                <Form.Control required onChange={handleChangeImagen} type="text" placeholder="https://image.com" />
              </Form.Group>

            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>Cerrar</Button>
            <Button onClick={() => crearVehiculo()} variant="info">Guardar</Button>
          </Modal.Footer>
        </Modal>
        :
        <Modal show={show} onHide={onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Editar vehículo ({vehiculo._id})</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Matrícula</Form.Label>
                <Form.Control required onChange={handleChangeMatricula} type="text" defaultValue={vehiculo.matricula} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Marca</Form.Label>
                <Form.Control required onChange={handleChangeMarca} type="text"  defaultValue={vehiculo.marca} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Modelo</Form.Label>
                <Form.Control required onChange={handleChangeModelo} type="text" defaultValue={vehiculo.modelo} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Matriculación</Form.Label>
                <Form.Control required onChange={handleChangeMatriculacion} type="number" defaultValue={vehiculo.matriculacion} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Imagen (url)</Form.Label>
                <Form.Control required onChange={handleChangeImagen} type="text" defaultValue={vehiculo.imagen} />
              </Form.Group>

            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>Cerrar</Button>
            <Button onClick={() => editarVehiculo()} variant="info">Editar</Button>
          </Modal.Footer>
        </Modal>
      }

    </>
  )
}

export default ModalCrud;
