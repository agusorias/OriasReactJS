import "./Item.css";
import ItemCount from "./ItemCount";

const Item = ({item})=>{
    return (
        <div className="tiendaCard">
            <img src={item.img} alt={item.name}></img>
            <h3 className="cardText">{item.name}</h3>  
            <h3 className="cardText">${item.price}</h3> 
            <ItemCount stock= {item.stock} initial={item.initial}/>
        </div>
    );
};
export default Item