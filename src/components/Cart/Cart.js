import {  useCartContext } from "../../Context/CartContext"

const Cart = () => {
    const {cart, clear, precioTotal, removeItem} = useCartContext() 

    
    return (
        <div>
           {cart.map(pro => <div> 
                                <p>{ pro.name}</p>
                                <p>{ pro.quantity}</p>
                                <button onClick={()=>removeItem(pro.id)} >X</button>
                            </div>
            )}
            <p>Total: $ {precioTotal()}</p>
            <button onClick={clear} >Borrar listado Cart</button>
        </div>
    )
}

export default Cart
