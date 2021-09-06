import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';

const items = { id: 1, name: "Bolsa de Tela", stock:10, initial:1 ,price:100, img:"https://images.unsplash.com/photo-1628088306750-8da70000db82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vel voluptate consequuntur suscipit delectus, eaque quidem incidunt sint velit, veritatis debitis odit mollitia nesciunt praesentium dignissimos, rerum inventore reprehenderit laudantium." }

const getItem = new Promise((resuelto)=>{
    setTimeout(() => {
        resuelto(items) 
    }, 2000);
})

function ItemDetailContainer() {
    
    const [item, setItem] = useState({})

    useEffect(() => {
        getItem
        .then (resp => setItem(resp))
    }, [])
    console.log(item.id);
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}
export default ItemDetailContainer