import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProd = ({producto}) => {

  return (
    <>
      <Col md={3} className='my-2'>
        <Card>
          <Card.Img
            variant="top"
            src={producto.imagen}
            className='px-2'
          />
          <Card.Body>
            <Card.Title>{producto.nombreProducto}</Card.Title>
            <Card.Text>Precio: ${producto.precio}.</Card.Text>
            <Button variant="danger" as={Link} to={`/administrar/detalleprod/${producto.id}`}>Ver más</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardProd;
