import { Link } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemList = ({ lista }) => {

    return (
    <>
        {lista.length ? (
            lista.map((produ) => (
            <Link to={`/detail/${produ.id}`} key={produ.id}>
                <Item {...produ} />
            </Link> 
            ))
        ) : (
            <p>No hay productos</p> 
        )}        
    </>
    );
};