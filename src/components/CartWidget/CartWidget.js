import { useCartContext } from "../../Context/CartContext";
import "./CartWidget.css";

const CartWidget =()=>{
    const {cart} = useCartContext();
    const totalItems = cart.reduce ((acc,item)=>{
        return acc+ item.quantity;
    },0);
    return(
        <div className="cartWidget">
            <img
            src="https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png"
            alt="Shopping Cart" id="cartImg"
            />
            <p className="totalItems">{totalItems}</p>
        </div>
    )
}
export default CartWidget