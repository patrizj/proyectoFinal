import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ListadoCoches from "./componentes/listadoCoches";
import Cabecera from "./componentes/cabecera";
import FormularioVentas from "./componentes/formularioVentas";
import Contacto from "./componentes/contacto";
import Footer from "./componentes/footer";
import GestionFlota from "./componentes/gestionFlota";

function App() {
  const year = new Date().getFullYear();
  return (
    <BrowserRouter>
    <Cabecera />
      <Routes>
          <Route exact path="/" element={<ListadoCoches />} />
          <Route exact path="/venta" element={<FormularioVentas />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/gestion" element={<GestionFlota />} />
      </Routes>
      <Footer year={year}/>
    </BrowserRouter>
  );
}

export default App;
