import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({item})=>{
    return (
        <div className="tiendaCard">
            <img src={item.img} alt={item.name}></img>
            <div className="cardInfo">
                <h3 className="cardText">{item.name}</h3>  
                <h4 className="cardPrice">${item.price}</h4> 
                <Link to={`/item/${item.id}`}>Ver detalle </Link>
            </div>
        </div>
    );
};
export default Item