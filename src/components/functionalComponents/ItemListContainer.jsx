
const ItemListContainer = ({ nombre, url }) => {
   
    return (
        <li> <a href={url}>{nombre}</a></li>
        );
};

export default ItemListContainer