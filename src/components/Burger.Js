import React from "react";

const Burger = ({burger, cart, setCart, burgers}) => {

    const {nombre, precio, id} = burger

    return (
        <div>
            <ul>
    <li>{nombre}</li>
    <li>${precio}</li>
            </ul>
        </div>
    );
};

export default Burger;