import {Link} from 'react-router-dom';

const ItemProd = () => {
    return (
        <>
        <tr>
          <td>1</td>
          <td>Sandwich</td>
          <td>$450</td>
          <td>@mdo</td>
          <td>Salado</td>
          <td> <Link className='btn btn-warning' to='/administrar/editarprod'>Editar</Link> <br />
          <Link className='btn btn-danger'>Borrar</Link></td>
        </tr>
      </>
    );
};

export default ItemProd;