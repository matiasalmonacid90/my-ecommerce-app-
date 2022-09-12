import { useState, useEffect } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {


    const [cont, setContador] = useState(initial);

    const updateNum = () => {
        if (stock > cont) {
            setContador(cont + 1);
        }
    }

    const downNum = () => {
        if (cont > initial) {
            setContador(cont - 1);
        }
    }

    return (
        <>
            <div class="carrito"><h2>CARRITO</h2>
                <h2>{cont}</h2>
                <button onClick={updateNum}>Agregar artículos</button>
                <button onClick={downNum}>Quitar artículos</button>
                <button onClick={() => {onAdd(cont)}}>Agregar al carrito</button>

            </div>
        </>
    )
}

export default ItemCount