import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";

export const Nav = () => {
    const {getTotalItems} = useCartContext();

    return <nav>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/categoria/salon"}>Menú del Salón</Link>
            </li>
            <li>
                <Link to={"/categoria/delivery"}>Delivery</Link>
            </li>
            <li>
                <Link>Carrito</Link>
                {getTotalItems() > 0 && (       //Poner explícitamente la condición
                    <span className="in-cart">{getTotalItems()}</span>
                )}
            </li>
        </ul>
    </nav>
}