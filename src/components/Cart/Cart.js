import {  useCartContext } from "../../Context/CartContext"
import "./Cart.css";
import '../../App.css';


const Cart = () => {
    const {cart, clear, precioTotal, removeItem} = useCartContext() 
    if(cart.length!==0){
        return <div>
            <div className="ecommerceCardContainer">
                {cart.map(pro =><div className="cartCard">
                                    <img src={pro.img} alt={pro.name}></img>
                                        <div className="cardInfo">
                                            <h3 className="cardText">{pro.name}</h3>  
                                            <h4 className="cardPrice">{pro.quantity} x ${pro.price} = $ {pro.quantity*pro.price}</h4> 
                                        </div> 
                                    <button onClick={()=>removeItem(pro.id)} >X</button>
                                </div>
                )}
                </div>
                <button onClick={clear} >Total: $ {precioTotal()}</button>
                <button onClick={clear} >Borrar listado Cart</button>
            </div>
    }
    return <h2>No hay nada</h2>
}

export default Cart
