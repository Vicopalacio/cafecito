import { useEffect } from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {useParams} from 'react-router-dom';
import { obtenerProductoApi } from '../../helpers/queries';

const EditarProd = () => {
  const {id} = useParams();

  useEffect(() => {
    obtenerProductoApi(id).then((laRespuesta)=>{
      if(laRespuesta.status === 200){
        console.log(laRespuesta)
        setValue('nombreProducto',laRespuesta.dato.nombreProducto);
        setValue('precio',laRespuesta.dato.precio);
        setValue('imagen',laRespuesta.dato.imagen);
        setValue('categoria',laRespuesta.dato.categoria);
        //cargar los datos al formulario del priducto
      }
    })
  }, []);

  const{
    register,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm();

  const onSubmit = (data)=>{
    console.log(data);
  }

    return (
        <>
        <Container className='my-3'>
        <h2 className='display-5 mt-4'>Editar Producto</h2>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicNombreProducto">
          <Form.Label>Nombre Producto</Form.Label>
          <Form.Control type="text" placeholder="Cafe" 
          {...register('nombreProducto',{
            required: 'El nombre del producto es un dato obligatorio',
            minLenght:{
              value: 2,
              message:'La cantidad minima de caracteres debe ser 2',
            },
            maxLenght:{
              value:20,
              message:'La cantidad maxima de caracteres es de 20',
            }
          })}/>
          <Form.Text className="text-danger">{errors.nombreProducto?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrecioProducto">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="text" placeholder="$400" 
          {...register('precio',{
            required:'El precio es un valor obligatorio',
            min:{
              value:1,
              message:'El precio minimo debe ser de 1',
            },
            max:{
              value:10000,
              message:'El precio maximo debe ser de 10000',
            }
          })}/>
          <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImagenProducto">
          <Form.Label>URL imagen</Form.Label>
          <Form.Control type="text" placeholder="URL" 
          {...register('imagen',{
            required:'La URL de la imagen es obligatoria',
            pattern:{
              value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
              message: 'Debe ingresar una URL valida',
            }
          })}/>
          <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCategoriaProducto">
            <Form.Select aria-label='Default select example' className="mt-3"
            {...register('categoria',{
              required:'Debe seleccionar una categoria'
            })
            }>
              <option>Categoria</option>
              <option value="Dulce">Dulce</option>
              <option value="Salado">Salado</option>
              <option value="Bebida Fria">Bebida Fria</option>
              <option value="Bebida Caliente">Bebida Caliente</option>
            <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
            </Form.Select>
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