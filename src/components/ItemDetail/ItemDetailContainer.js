import React, {useEffect, useState} from 'react';
import { getFirestore } from '../../service/getFirebase';
import ItemDetail from './ItemDetail';
import "./ItemDetail.css";

const ItemDetailContainer = (props) => {
    
    const [itemDetail, setItemDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const id= props.match.params.id;
    
    useEffect(() => {
        const dataBase = getFirestore()
        const items = dataBase.collection('Items').doc(id).get()
        items
        .then (resp=>{
            setItemDetail({id : resp.id,...resp.data()})
            setLoading(false)
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