import { useState } from "react";
import { CartContext } from "./CartContext"

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const exists = (id) => {
        const existe = cart.some(p => p.id === id)
        return existe;
    };

    const addItem = (item) => {
        if (exists(item.id)) {
            alert ("El producto ya existe en el carrito"); //Provisorio
            return;
        }

        setCart([...cart, item]);
        alert (`${item.name} agregado`);
    };

    const clearCart = () => {
        setCart([])
    };

    // Provisorio
    const getTotalItems= () => {
        if (cart.length) {
            return cart.length;
        }
    }


    const values = {
        cart, addItem, clearCart, getTotalItems
    }
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;    
};