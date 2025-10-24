import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [ detail, setDetail ] = useState({});
    const {id} = useParams();

    useEffect(() => {
        fetch("/data/productos.json")
            .then((res) => {
                if(!res.ok) {
                    throw new Error("No se encontró el plato buscado");
                }
                return res.json();
            })
            .then((data) => {
                const found = data.find(produ => produ.id === id)
                if (found){
                    setDetail(found);
                } else {
                    throw new Error("No se encontró el plato buscado")
                }
            })
            .catch(() => {});
    }, [id]);

    return (
        <main>
            {Object.keys(detail).length ? (
                <ItemDetail detail={detail} />
            ) : (
                <p>Cargando plato...</p>    
            )}
        </main>
    );
};