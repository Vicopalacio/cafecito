import { Container, Row } from "react-bootstrap";
import CardProd from "./producto/CardProd";

const Inicio = () => {
    return (
        <Container className='mainSection'>
            <h3 className='display-4 text-center mt-5'>Bienvenidos</h3>
            <hr />
            <Row>
            <CardProd></CardProd>
            <CardProd></CardProd>
            <CardProd></CardProd>
            </Row>
        </Container>
    );
};

export default Inicio;