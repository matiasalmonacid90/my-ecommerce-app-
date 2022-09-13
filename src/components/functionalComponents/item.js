
const Item = ({id, name, description, price, image}) => {
    return(
        <div>
            <img src={image} />
            <h4>{name}</h4>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};

export default Item;