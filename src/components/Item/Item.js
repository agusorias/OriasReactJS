import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({item})=>{
    return (
        <Link to={`/item/${item.id}`} style={{ textDecoration: 'none' }}>
            <div className="tiendaCard">
            <img src={item.img} alt={item.name}></img>
                <div className="cardInfo">
                    <h4 className="cardPrice">${item.price}</h4>
                    <h3 className="cardText">{item.name}</h3> 
                    <p className="cardFooter">Click para ver detalle </p>
                </div>
            </div>
        </Link>
    );
};
export default Item