import { Button } from 'react-bootstrap';

const ItemProd = () => {
    return (
        <>
        <tr>
          <td>1</td>
          <td>Sandwich</td>
          <td>$450</td>
          <td>@mdo</td>
          <td>Salado</td>
          <td> <Button variant="warning">Editar</Button> <br />
          <Button variant="danger">Borrar</Button></td>
        </tr>
      </>
    );
};

export default ItemProd;