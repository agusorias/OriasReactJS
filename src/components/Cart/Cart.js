import {  useCartContext } from "../../Context/CartContext"
import {useState} from 'react';
import "./Cart.css";
import '../../App.css';
import { getFirestore } from "../../service/getFirebase";


const Cart = () => {

    const [formData, setFormData] = useState(initialState)

    const {cart, clear, precioTotal, removeItem} = useCartContext() 

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault()

        const newOrder={
            buyer:formData,
            items:cart,
            total:precioTotal()
        }

        const db = getFirestore()
        const orders= db.collection('orders')
        orders.add(newOrder)
        .finally(()=>{
            setFormData(initialState)
            clear()
        })
    }

    if(cart.length!==0){
        return  <div>
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
                    <form onChange={handleChange}>
                        <input type="text" placeholder="Ingrese nombre " name="name" value={formData.name}/>
                        <input type="tel" placeholder="Ingrese número de contacto" name="tel" value={formData.tel}/>
                        <input type="email" placeholder="Ingrese dirección e-mail " name="email" value={formData.email}/>
                        <input type="email" placeholder="Confirme dirección e-mail" name="email2"/>
                    </form>
                    <button onClick={handleSubmit} >Total: $ {precioTotal()}</button>
                    <button onClick={clear} >Borrar listado Cart</button>
                </div>
    }
    return <h2>No hay nada</h2>
}

export default Cart

const initialState={
    name:'',
    email:'',
    tel:'',
}