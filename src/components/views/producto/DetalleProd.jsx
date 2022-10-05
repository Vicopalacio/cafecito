import { Card, Badge, Container, Row, Col } from "react-bootstrap";

const DetalleProd = () => {
  return (
    <Container className="my-4">
        <Card className='w-100 h-50' >
      <Row>
          <Col md={4}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className='py-3'
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>Sandwich</Card.Title>
              <hr />
              <Badge pill bg="success">
                Salado
              </Badge>
              <Card.Text>Precio: $450.</Card.Text>
            </Card.Body>
          </Col>
      </Row>
        </Card>
    </Container>
  );
};

export default DetalleProd;
