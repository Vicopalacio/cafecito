import { Form, Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CrearProd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Container className="my-3">
        <h2 className="display-5 mt-4">Nuevo Producto</h2>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicNombreProducto">
            <Form.Label>Nombre Producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cafe"
              {...register("nombreProducto", {
                required: true,
              })}
            />
            <Form.Text className="text-danger">algun error</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrecioProducto">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="text" placeholder="$400" />
            <Form.Text className="text-danger">algun error</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicImagenProducto">
            <Form.Label>URL imagen</Form.Label>
            <Form.Control type="text" placeholder=".png" />
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
            </Form.Select>
            <Form.Text className="text-danger">algun error</Form.Text>
          </Form.Group>
          <Button className="btn btn-primary" type="submit">
            Guardar
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default CrearProd;
