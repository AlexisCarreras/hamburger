import React, { Fragment, useState } from 'react';
import Burger from "./components/Burger.Js";

function App() {

  //Estado de hamburguesas con listado de hamburguesas
  const [burgers, setBurgers] = useState([
    { id: 1, nombre: 'Hamburguesa Completa', precio: 250 },
    { id: 2, nombre: 'Hamburguesa con Cheddar', precio: 180 },
    { id: 3, nombre: 'Hamburguesa con Jamón y Queso', precio: 150 },
    { id: 4, nombre: 'Hamburguesa con Bacon', precio: 200 },
    { id: 5, nombre: 'Hamburguesa de Pollo Completa', precio: 240 },
  ]);

  //Estado del Carrito
  const [cart, setCart] = useState([]);

  return (
    <Fragment>
      <h3>Burgers</h3>
      {burgers.map((burger) => (
         <Burger
          key={burger.id}
          burger={burger}
          cart={cart}
          setCart={setCart}
          burgers={burgers}
        />
      ))}
    </Fragment>
  );
}

export default App;