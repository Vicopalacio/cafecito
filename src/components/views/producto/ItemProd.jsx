import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { borrarProductoAPI, consultarApi } from '../../helpers/queries';
import Swal from 'sweetalert2';

const ItemProd = ({producto, setProductos}) => {

  const borrarProducto=()=>{
    borrarProductoAPI(producto.id).then((laRespuesta)=>{
      if(laRespuesta.status === 200){
        Swal.fire('Producto elimiando','El producto fue eliminado','success');
        //cuando haya eliminado, busco todos los productos existentes en ese instante de tiempo
        consultarApi().then((respuesta)=>{
          //actualizamos el state de prod de administrador con los datos que hay en la API
          setProductos(respuesta);
        })
      }else{
        Swal.fire('Ocurrio un error','Intente mas tarde','error');
      }
    })
  }
    return (
        <>
        <tr>
          <td>{producto.id}</td>
          <td>{producto.nombreProducto}</td>
          <td>${producto.precio}</td>
          <td>{producto.imagen}</td>
          <td>{producto.categoria}</td>
          <td> <Link className='btn btn-warning' to={`/administrar/editarprod/:id`}>Editar</Link> <br />
          <Button className='btn btn-danger mt-1' onClick={borrarProducto}>Borrar</Button></td>
        </tr>
      </>
    );
};

export default ItemProd;