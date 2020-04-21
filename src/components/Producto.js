import React from 'react';

const Producto = ({producto,carrito,guardarCarrito,productos}) => {


    let seleccionarProducto=id=>{
        let producto=productos.filter(producto=> producto.id===id)[0]
        guardarCarrito([...carrito,producto])
    }

    let eliminarProducto=id=>{
        let productos=carrito.filter(producto=>producto.id!==id)
        guardarCarrito(productos)
    }

    return(
        <div>
           
            {productos?
            <span>
                <h1>{producto.nombre}</h1>
            <p>$ {producto.precio} </p>
                <button
            type="button"
            onClick={ ()=>seleccionarProducto(producto.id) }
            >
               Agregar carrito
           </button>
            </span>
            :<span>
                <h4>{producto.nombre}</h4>
            <p>$ {producto.precio} </p>
            <button 
                type="button"
                onClick={()=>eliminarProducto(producto.id)} 
                >Eliminar producto</button>
                </span>  
        }
        </div>
    );
}

export default Producto;