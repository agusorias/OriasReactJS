import React, {useEffect, useState} from 'react';
import '../../App.css';
import ItemList from './ItemList';
import { getFirestore } from '../../service/getFirebase';
import { useParams } from 'react-router';

function ItemListContainer(){
      
    const [item, setItem] = useState([])
    
    const [loading, setLoading] = useState(true)

    const {categoriaItem} = useParams()

    useEffect(() => {

      const dataBase = getFirestore();

      if(categoriaItem===undefined){
        const queryDB = dataBase.collection('Items')
        queryDB.get().then((querySnapshot)=>{
          setItem(querySnapshot.docs.map(item=>( {id : item.id , ...item.data() })))
        })
      }else if(categoriaItem==='Limpieza'){
        const queryDB = dataBase.collection('Items').where('categoria','==','Limpieza')
        queryDB.get().then((querySnapshot)=>{
          setItem(querySnapshot.docs.map(item=>( {id : item.id , ...item.data() })))
        })
      }else if(categoriaItem==='Higiene'){
        const queryDB = dataBase.collection('Items').where('categoria','==','Higiene')
        queryDB.get().then((querySnapshot)=>{
          setItem(querySnapshot.docs.map(item=>( {id : item.id , ...item.data() })))
        })
      }else if(categoriaItem==='Reciclaje'){
        const queryDB = dataBase.collection('Items').where('categoria','==','Reciclaje')
        queryDB.get().then((querySnapshot)=>{
          setItem(querySnapshot.docs.map(item=>( {id : item.id , ...item.data() })))
        })
      }
      setLoading(false)
    }, [categoriaItem])
    
  return (
    <>
      {loading ? 
        <h2>Cargando</h2>
        :  
      <div className='ecommerceCardContainer'>
          <ItemList items={item}/>
      </div>
      }
    </>
  )
}

export default ItemListContainer;