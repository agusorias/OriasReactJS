import React, {useEffect, useState} from 'react';
import '../../App.css';
import ItemList from './ItemList';


const productos = [
  { id: 1, name: "Bolsa de Tela", stock:10, initial:1 ,price:100 },
  { id: 2, name: "Shampoo sólido", stock:10, initial:1 ,price:100 },
  { id: 3, name:  "Acondicionador sólido" , stock:10, initial:1 ,price:100},
  { id: 4, name:  "Jabón sólido" , stock:10, initial:1 ,price:100},
  { id: 5, name:  "Pasta de dientes ecológica" , stock:10, initial:1 ,price:100},
  { id: 6, name:  "Cepillo de bambú" , stock:10, initial:1 ,price:100},
];

function getProducto(id) {
  if (id===undefined) {
      return productos
  }else{
      return productos.find( producto=> producto.id === id)
  }
}

let tarea = new Promise((resolve) => {
  setTimeout(() => {
      resolve(getProducto(6));
  }, 3000);
});

function ItemListContainer(){
      
    const [todos, setTodos] = useState([])
    useEffect(() => {
      tarea
      .then(
        setTodos(productos)
      )   
    }, [])

  return (

          <div className='ecommerceCardContainer'>
              <ItemList todos={todos}/>
          </div>
  )
}

export default ItemListContainer;