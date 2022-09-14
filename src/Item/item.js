import "./Item.css"
import { Link } from "react";


const Item = ({id, name, description, price, image}) => {
    return(
        <div className="tarjeta-producto">
            <img src={image}/>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>{price}</p>
            <button>Ver Detalle</button>

        </div>
    );
};

export default Item;