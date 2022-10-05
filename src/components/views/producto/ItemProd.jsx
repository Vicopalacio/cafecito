import {Link} from 'react-router-dom';

const ItemProd = ({producto}) => {
    return (
        <>
        <tr>
          <td>{producto.id}</td>
          <td>{producto.nombreProducto}</td>
          <td>${producto.precio}</td>
          <td>{producto.imagen}</td>
          <td>{producto.categoria}</td>
          <td> <Link className='btn btn-warning' to='/administrar/editarprod'>Editar</Link> <br />
          <Link className='btn btn-danger mt-1'>Borrar</Link></td>
        </tr>
      </>
    );
};

export default ItemProd;