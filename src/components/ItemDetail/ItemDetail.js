import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../Context/CartContext";

function ItemDetail({item}) {

    const {addToCart}= useCartContext();

    const onAdd=(count)=>{
        addToCart( item ,count);
    }

    return (
        <div className="detailCard">
            <img src={item.img} alt={item.name}></img>
            <div className="detailCardInfo">
                <div className="detailCardText">
                    <h3 className="detailCardText">{item.name}</h3>  
                    <p className="detailCardText">{item.detail}</p> 
                </div>
                <ItemCount stock= {item.stock} price={item.price} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail