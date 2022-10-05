import { Container, Row } from "react-bootstrap";
import CardProd from "./CardProd";

const Inicio = () => {
    return (
        <Container>
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