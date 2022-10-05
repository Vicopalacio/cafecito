import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/views/Inicio";
import Administrador from "./components/views/Administrador";
import Error from "./components/views/Error";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import DetalleProd from "./components/views/producto/DetalleProd";
import EditarProd from './components/views/producto/EditarProd';
import CrearProd from './components/views/producto/CrearProd';

function App() {
  return (
    //administrar las rutas
    <BrowserRouter>
      {/* aca coloco menu para que aparezca en todas las paginas*/}
      <Menu></Menu>
      <Routes>
        {/* las rutas siempre son Nombre de dominio+ path*/}
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/administrar"
          element={<Administrador></Administrador>}
        ></Route>
        <Route exact path="/administrar/detalleprod" element={<DetalleProd></DetalleProd>}></Route>
        <Route exact path="/administrar/editarprod" element={<EditarProd></EditarProd>}></Route>
        <Route exact path="/administrar/crearprod" element={<CrearProd></CrearProd>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
