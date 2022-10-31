import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { consultarApi } from "../helpers/queries";
import CardProd from "./producto/CardProd";
import { useEffect } from "react";

const Inicio = () => {
  const [verProd, setVerProd] = useState([]);

  useEffect(() => {
    consultarApi().then((laRespuesta) => {
      setVerProd(laRespuesta);
    });
  }, []);

  return (
    <Container className="mainSection">
      <h3 className="display-4 text-center mt-5">Bienvenidos</h3>
      <hr />
      <Row>
        {
        verProd.map((producto) => (
          <CardProd
            key={producto._id}
            producto={producto}
            verProd={verProd}
          ></CardProd>
        ))}
      </Row>
    </Container>
  );
};

export default Inicio;
