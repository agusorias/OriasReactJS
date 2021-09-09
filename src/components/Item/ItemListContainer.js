import React, {useEffect, useState} from 'react';
import{tarea} from"../../utils/promesas";
import '../../App.css';
import { useParams } from 'react-router';
import ItemList from './ItemList';

function ItemListContainer(){
      
    const [item, setItem] = useState([])

    const {categoriaItem} = useParams()

    useEffect(() => {
      if(categoriaItem===undefined){
        tarea
        .then((resp)=>setItem(resp))   
      }else{
        tarea
        .then((resp)=>setItem(resp.filter(renderCategory=>categoriaItem===renderCategory.categoria)))   
      }
    }, [categoriaItem])
  return (
    <div className='ecommerceCardContainer'>
        <ItemList items={item}/>
    </div>
  )
}

export default ItemListContainer;