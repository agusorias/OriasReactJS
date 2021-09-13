import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock,price,onAdd})=>{
    const[count,setCount]=useState(parseInt(1));
    const [buttonChange, setButtonChange] = useState(false)
        const incrementalClick = () => {
        if(count!==parseInt(stock))
        setCount(count + 1);
        };
        const decrementalClick = () => {
        if(count!==parseInt(1))
            setCount(count - 1);
        };
        const onAddHandler = () => {
            onAdd(count)
            setCount(1)
            setButtonChange(true)
        };
        return (
            <div className="cardBuyContainer">
                {
                    buttonChange ? 
                        <Link to='/cart'>
                            <button className="carritoAddButton">Terminar mi compra</button>
                        </Link>
                    :
                    <div className='cardBuyInfo'>
                        <h3 className="cardText">${price*count}</h3> 
                        <div className="counterContainer">
                            <button className="counterButtons" onClick={decrementalClick}>-</button>
                            <label>{count}</label>
                            <button className="counterButtons" onClick={incrementalClick}>+</button>
                        </div> 
                        <p className="cardStock">Stock:{stock}</p> 
                        <button className="carritoAddButton" onClick={onAddHandler}>Agregar a carrito</button>
                    </div>
                }
                
            </div>
        );
    };
export default ItemCount