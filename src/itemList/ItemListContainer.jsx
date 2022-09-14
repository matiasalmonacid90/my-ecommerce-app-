import data from "./../Item/mock-data";
import { useEffect, useState } from "react";
import ItemList from "./itemList";

const ItemListContainer = ({ nombre, url }) => {
    const [item, setItems] = useState([]);

    const getData = new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(data);
        }, 2000);
    });

    useEffect(() => {
        getData.then((res) => {
            setItems(res)
            console.log(res);
        })
    }, []);

    return (
        <>
            <ItemList itemsList={item} />
        </>
    );
};

export default ItemListContainer;