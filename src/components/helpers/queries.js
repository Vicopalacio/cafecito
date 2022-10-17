const URL = process.env.REACT_APP_API_CAFECITO;
//peticion GET para obtener todos los productos
//peticion POST crear un nuevo producto, en los login tambien los puedo usar
//peticion PUT sirve para modificar un producto
//peticion DELETE sirve para borrar

export const consultarApi = async()=>{
    try{
        // console.log(URL)
        const respuesta = await fetch(URL)
        const listaProductos = await respuesta.json()
        console.log(listaProductos);
        return listaProductos;
    }catch(error){
        console.log(error)
        return false;
    }
}