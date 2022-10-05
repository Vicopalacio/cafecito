import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProd = () => {
  return (
    <>
      <Col md={3} className='my-2'>
        <Card>
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className='px-2'
          />
          <Card.Body>
            <Card.Title>Sandwich</Card.Title>
            <Card.Text>Precio: $450.</Card.Text>
            <Button variant="danger" as={Link} to='/detalleprod'>Ver más</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardProd;
