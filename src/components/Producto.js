import React from 'react';

const Producto = ({producto,carrito,guardarCarrito,productos}) => {


    let seleccionarProducto=id=>{
        let producto=productos.filter(producto=> producto.id===id)
        console.log(producto)
    }

    return(
        <div>
            <h1>{producto.nombre}</h1>
            <p>$ {producto.precio} </p> 
            <button
             type="button"
             onClick={ ()=>seleccionarProducto(producto.id) }
             >
                Agregar carrito
            </button>
        </div>
    );
}

export default Producto;