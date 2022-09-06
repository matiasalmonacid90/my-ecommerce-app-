import { useState, useEffect } from "react";

import style from "./style.css";


const ItemCount = (stock, initial) => {
 

    const [cont, setContador] = useState(0);
    
    const updateNum = () => {
       
        setContador(cont + 1);
    }

    const downNum = () => {

        setContador(cont - 1);

    }

    return (
        <>
            <div class="carrito"><h2>CARRITO</h2>
                <h2>{cont}</h2>
                <button onClick={updateNum}>Agregar artículos</button>
                <button onClick={downNum}>Quitar artículos</button>

            </div>
        </>
    )
}

export default ItemCount