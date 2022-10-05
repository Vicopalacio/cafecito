import { Container, Table, Button } from "react-bootstrap";
import ItemProd from "./ItemProd";

const Administrador = () => {
    return (
        <>
        <Container>
        <div className='wrap'>
        <h3 className="display-4 mt-5">Productos disponibles</h3>
        <Button variant="primary">Agregar</Button>
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
        <ItemProd></ItemProd>
      </tbody>
    </Table>
        </Container>
        </>
    );
};

export default Administrador;