import React from 'react'
import Producto from './Producto'

let Carrito =({carrito,guardarCarrito})=>(
    <div className='carrito'>
        <h2>Tu carrito de Compras</h2><span>{carrito.length}</span>
        {carrito.map(carro=>(
            <Producto 
                producto={carro}
                key={carro.id}
                carrito={carrito}
                guardarCarrito={guardarCarrito}
            />
        ))}
    </div>

)
export default Carrito