import { Container, Table } from "react-bootstrap";
import ItemProd from "./producto/ItemProd";
import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import { consultarApi } from "../helpers/queries";


const Administrador = () => {
  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
    consultarApi().then((laRespuesta)=>{
      setProductos(laRespuesta)
    })
  }, [])
  

    return (
        <>
        <Container>
        <div className='d-flex justify-content-between align-items-center'>
        <h3 className="display-4 mt-5">Productos disponibles</h3>
        <Link className='h-100 btn btn-primary' to='/administrar/crearprod'>Agregar</Link> 
        </div>
        <hr />
        <Table striped bordered hover responsive>
      <thead>
      <tr>
        <th>Codigo</th>
        <th>Producto</th>
        <th>Precio</th>
        <th>URL imagen</th>
        <th>Categoria</th>
        <th>Opciones</th>
      </tr>
      </thead>
      <tbody>
        {
          productos.map((producto)=> <ItemProd key={producto.id} producto={producto}></ItemProd>)
        }
      </tbody>
    </Table>
        </Container>
        </>
    );
};

export default Administrador;