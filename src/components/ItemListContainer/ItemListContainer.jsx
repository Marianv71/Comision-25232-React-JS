import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch("../data/productos.json")
            .then((res) => {
                if(!res.ok) {
                    throw new Error("Hubo un problema al buscar el plato");
                }
                return res.json();
            })
            .then((data) => {
                setProductos(data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return <section>
        <h1>Bienvenidos</h1>
        <ItemList lista={productos} />   
    </section>
}