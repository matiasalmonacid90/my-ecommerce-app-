
const Item = ({id, name, description, price, image}) => {
    return(
        <div>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};

export default Item;