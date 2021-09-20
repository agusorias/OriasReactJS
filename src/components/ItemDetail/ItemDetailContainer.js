import React, {useEffect, useState} from 'react';
import {items} from"../../utils/promesas";
import ItemDetail from './ItemDetail';
import "./ItemDetail.css";

const ItemDetailContainer = (props) => {
    
    const [itemDetail, setItemDetail] = useState({})
    const [loading, setLoading] = useState(true)

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
        getItemDetail
        .then (resp=>{
            setTimeout(() => {
                setItemDetail(resp)
                setLoading(false)
            }, 2000);
        })
    },)

    return (
        <>
            {loading ? 
                <h2>Cargando</h2>
                :        
                <div className="itemDetailContainer">
                    <ItemDetail item={itemDetail}/>
                </div>
            }  
        </>
    )
}

export default ItemDetailContainer