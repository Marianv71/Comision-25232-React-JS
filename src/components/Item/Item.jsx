import "./Item.css";

export const Item = ({nombre, precio, descripcion, imagenUrl, children}) => {
    return (
        <article className="producto-item">
            <img src={imagenUrl} alt={descripcion} />
            <h2 className="producto-titulo">{nombre}</h2>
            <p>Precio: $ {precio}</p>
            <p>Descripción: {descripcion}</p>
            {children}
    </article>
    );
};