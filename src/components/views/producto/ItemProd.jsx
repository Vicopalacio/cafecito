import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProductoAPI, consultarApi } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemProd = ({ producto, setProductos }) => {
  const borrarProducto = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Estas Seguro?",
        text: "Los cambios seran irreversibles!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Borrar!",
        cancelButtonText: "Cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          borrarProductoAPI(producto._id).then((laRespuesta) => {
            if (laRespuesta.status === 200) {
              //cuando haya eliminado, busco todos los productos existentes en ese instante de tiempo
              consultarApi().then((respuesta) => {
                //actualizamos el state de prod de administrador con los datos que hay en la API
                setProductos(respuesta);
                swalWithBootstrapButtons.fire(
                  "Borrado!",
                  "Ha sido borrado con exito",
                  "success"
                )
              });
            } 
          });
        }
        else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelado",
            "Los cambios no fueron realizados",
            "error"
          );
        }
      });
  };
  return (
    <>
      <tr>
        <td>{producto._id}</td>
        <td>{producto.nombreProducto}</td>
        <td>${producto.precio}</td>
        <td>{producto.imagen}</td>
        <td>{producto.categoria}</td>
        <td>
          {" "}
          <Link
            className="btn btn-warning"
            to={`/administrar/editarprod/${producto._id}`}
          >
            Editar
          </Link>{" "}
          <br />
          <Button className="btn btn-danger mt-1" onClick={borrarProducto}>
            Borrar
          </Button>
        </td>
      </tr>
    </>
  );
};

export default ItemProd;
