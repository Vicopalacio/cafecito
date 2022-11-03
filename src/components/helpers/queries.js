const URL = process.env.REACT_APP_API_CAFECITO;
const URLusuarios = process.env.REACT_APP_API_USUARIOS;
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

export const crearProductoAPI = async(producto)=>{
    try{
        const respuesta = await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch(error){
        console.log(error)
        return false;
    }
}

export const borrarProductoAPI = async(id)=>{
    try{
        const respuesta = await fetch(URL+'/'+id, {
            method: 'DELETE',
        });
        return respuesta;
    }catch(error){
        console.log(error)
        return false;
    }
}

export const obtenerProductoApi = async(id)=>{
    try{
        // console.log(URL)
        const respuesta = await fetch(URL+'/'+id);
        const producto = {
            dato: await respuesta.json(),
            status: respuesta.status
        }
        return producto;
    }catch(error){
        console.log(error)
        return false;
    }
}

export const editarProductoApi = async(id, producto)=>{
    try{
        // console.log(URL)
        const respuesta = await fetch(URL+'/'+id,{
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch(error){
        console.log(error)
        return false;
    }
}

export const consultarUsuarioApi = async()=>{
    try{
        // console.log(URL)
        const respuesta = await fetch(URLusuarios)
        const usuarios = await respuesta.json()
        console.log(usuarios);
        return usuarios;
    }catch(error){
        console.log(error)
        return false;
    }
}
export const crearUsuariosAPI = async(usuario)=>{
    try{
        //peticion POST
        const respuesta = await fetch(URLusuarios, {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(usuario)
        });
        return respuesta;
    }catch(error){
        console.log(error)
        return false;
    }
}
