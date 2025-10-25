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
<<<<<<< HEAD
            <li>                
                {/* <Link to={"/categoria/salon"}>Salón</Link> */}
                <Link to={"/"}>Salón</Link>
            </li>
            <li>
                {/* <Link to={"/categoria/delivery"}>Delivery</Link> */}
                <Link to={"/"}>Delivery</Link>
            </li>
            <li>
                {/* <Link>Carrito</Link> */}
                <Link><img src="../public/images/carrito.png" alt="Carrito"/> </Link>
=======
            <li>
                <Link to={"/categoria/salon"}>Menú del Salón</Link>
            </li>
            <li>
                <Link to={"/categoria/delivery"}>Delivery</Link>
            </li>
            <li>
                <Link>Carrito</Link>
>>>>>>> 19b3e4ee0950d7d44e60ceecb534a62a67b90b16
                {getTotalItems() > 0 && (       //Poner explícitamente la condición
                    <span className="in-cart">{getTotalItems()}</span>
                )}
            </li>
        </ul>
    </nav>
}