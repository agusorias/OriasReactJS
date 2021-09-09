import React, {useEffect, useState} from 'react';
import{items} from"../../utils/promesas";
import ItemDetail from './ItemDetail';
import "./ItemDetail.css";

const ItemDetailContainer = (props) => {
    
    const [itemDetail, setItemDetail] = useState({})

    const id= props.match.params.id;

    const getItemDetail = new Promise((resolve,reject)=>{
    const getId = items.find((p) => p.id === parseInt(id));
    if (getId) {
        resolve(getId)
    }else{
        reject('Product not found')
    };
    });
    
    useEffect(() => {
        getItemDetail.then (res=>setTimeout(() =>setItemDetail(res),2000))
    }, [])
    return (
        <div className="itemDetailContainer">
            <ItemDetail item={itemDetail}/>
        </div>
    )
}
export default ItemDetailContainer