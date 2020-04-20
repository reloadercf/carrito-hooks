import React,{Fragment,useState} from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto';


function App() {
  let [productos,guardarProductos]=useState([
{id:1, nombre:"Camisa react js",precio:50},
{id:2, nombre:"camisa vue js",precio:40},
{id:3, nombre:"camisa node js",precio:30},
{id:4, nombre:"camisa angular",precio:20},

  ])

  let [carrito,guardarCarrito]=useState([])

  return (
    <Fragment>
      <Header/>
      <h1>Lista de productos</h1>
      {productos.map(producto=>(
        <Producto
          producto={producto}
          key={producto.id}
          carrito={carrito}
          productos={productos}
          guardarCarrito={guardarCarrito}
          />
      ))}
      <Footer/>

    </Fragment>
  );
}

export default App;
