import {Container, Form, Button} from 'react-bootstrap';

const EditarProd = () => {
    return (
        <>
        <Container className='my-3'>
        <h2 className='display-5 mt-4'>Editar Producto</h2>
        <hr />
        <Form>
        <Form.Group className="mb-3" controlId="formBasicNombreProducto">
          <Form.Label>Nombre Producto</Form.Label>
          <Form.Control type="text" placeholder="Enter text" />
          <Form.Text className="text-danger">algun error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrecioProducto">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="text" placeholder="Enter text" />
          <Form.Text className="text-danger">algun error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImagenProducto">
          <Form.Label>URL imagen</Form.Label>
          <Form.Control type="text" placeholder="Enter text" />
          <Form.Text className="text-danger">algun error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCategoriaProducto">
            <Form.Select>
              <option>Categoria</option>
              <option value="1">Dulce</option>
              <option value="2">Salado</option>
              <option value="3">Frio</option>
              <option value="4">Caliente</option>
            <Form.Control type="text" placeholder="Salado" />
            <Form.Text className="text-danger">algun error</Form.Text>
            </Form.Select>
            <Form.Text className="text-danger">algun error</Form.Text>
          </Form.Group>
        <Button className='btn btn-primary' type="submit">
          Guardar
        </Button>
      </Form>
        </Container>
      </>
    );
};

export default EditarProd;