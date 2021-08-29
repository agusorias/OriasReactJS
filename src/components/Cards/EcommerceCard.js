import { useState } from "react";
import "./EcommerceCard.css";

const EcommerceCard = ({elemento,stock,inicial,onAdd})=>{
    const[count,setCount]=useState(parseInt(inicial));
    onAdd= count 
    const incrementalClick = () => {
    if(count!==parseInt(stock))
      setCount(count + 1);
    };
    const decrementalClick = () => {
    if(count!==parseInt(inicial))
        setCount(count - 1);
    };
    const onAddClick = () => {
        console.log(elemento+"="+onAdd);
    };
    return (
    <div className="tiendaCard">
        <h3>{elemento}</h3>  
        <div className="counterContainer">
            <button className="counterButtons" onClick={decrementalClick}>-</button>
            <label>{count}</label>
            <button className="counterButtons" onClick={incrementalClick}>+</button>
        </div> 
        <button className="carritoAddButton" onClick={onAddClick}>Agregar a carrito</button>
    </div>
    );
};
export default EcommerceCard