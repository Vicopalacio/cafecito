import { useEffect, useState } from "react";
import { Card, Badge, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProductoApi } from "../../helpers/queries";
import { useForm } from "react-hook-form";

const DetalleProd = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({})

  useEffect(() => {
    obtenerProductoApi(id).then((laRespuesta) => {
      console.log();
      if (laRespuesta.status === 200) {
        setProducto(laRespuesta.dato);
      }
    });
  }, []);
 

  return (
    <Container className="my-4 mainSection">
      <Card className="w-100 h-50">
        <Row>
          <Col md={4}>
            <Card.Img
              variant="top"
              src={producto.imagen}
              className="py-3"
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{producto.nombreProducto}</Card.Title>
              <hr />
              <Badge pill bg="success">
                {producto.categoria}
              </Badge>
              <Card.Text className='mt-3 fw-bolder'>Precio: ${producto.precio}.</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProd;
