import {Form, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const CrearProd = () => {
    return (
            <>
        <Container className='my-3'>
        <h2 className='display-5 mt-4'>Nuevo Producto</h2>
        <hr />
        <Form>
        <Form.Group className="mb-3" controlId="formBasicNombreProducto">
          <Form.Label>Nombre Producto</Form.Label>
          <Form.Control type="text" placeholder="Enter text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrecioProducto">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="text" placeholder="Enter text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImagenProducto">
          <Form.Label>URL imagen</Form.Label>
          <Form.Control type="text" placeholder="Enter text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCategoriaProducto">
          <Form.Label>Categoria</Form.Label>
          <Form.Control type="text" placeholder="Enter text" />
        </Form.Group>
        <Link className='btn btn-primary' type="submit">
          Guardar
        </Link>
      </Form>
        </Container>
      </>
    );
};

export default CrearProd;