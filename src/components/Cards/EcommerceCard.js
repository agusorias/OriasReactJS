import "./EcommerceCard.css";
import ItemCount from "./ItemCount";

const EcommerceCard = ({item})=>{
   
    return (
        <div className="tiendaCard">
            <h3 className="cardText">{item.name}</h3>  
            <h3 className="cardText">${item.price}</h3> 
            <ItemCount stock= {item.stock} initial={item.initial}/>
        </div>
    );
};
export default EcommerceCard