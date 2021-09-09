import { useState } from "react";

const ItemCount = ({stock,price})=>{
    const[count,setCount]=useState(parseInt(1));
        const incrementalClick = () => {
        if(count!==parseInt(stock))
        setCount(count + 1);
        };
        const decrementalClick = () => {
        if(count!==parseInt(1))
            setCount(count - 1);
        };
        const onAddClick = () => {
        
        };
        return (
            <div className="cardBuyContainer">
                <h3 className="cardText">${price*count}</h3> 
                <div className="counterContainer">
                    <button className="counterButtons" onClick={decrementalClick}>-</button>
                    <label>{count}</label>
                    <button className="counterButtons" onClick={incrementalClick}>+</button>
                </div> 
                <p className="cardStock">Stock:{stock}</p> 
                <button className="carritoAddButton" onClick={onAddClick}>Agregar a carrito</button>
            </div>
        );
    };
export default ItemCount