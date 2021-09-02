import { useState } from "react";

const ItemCount = ({stock ,initial})=>{
    const[count,setCount]=useState(parseInt(initial));
        const incrementalClick = () => {
        if(count!==parseInt(stock))
        setCount(count + 1);
        };
        const decrementalClick = () => {
        if(count!==parseInt(initial))
            setCount(count - 1);
        };
        const onAddClick = () => {
        
        };
        return (
            <div className="cardBuyContainer">
                <div className="counterContainer">
                    <button className="counterButtons" onClick={decrementalClick}>-</button>
                    <label>{count}</label>
                    <button className="counterButtons" onClick={incrementalClick}>+</button>
                </div> 
                <p className="cardText cardStock">Stock:{stock}</p> 
                <button className="carritoAddButton" onClick={onAddClick}>Agregar a carrito</button>
            </div>
        );
    };
export default ItemCount