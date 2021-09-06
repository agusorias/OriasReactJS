import React, {useEffect, useState} from 'react';
import '../../App.css';

import ItemList from './ItemList';

const items = [
  { id: 1, name: "Bolsa de Tela", stock:10, initial:1 ,price:100, img:"https://images.unsplash.com/photo-1628088306750-8da70000db82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vel voluptate consequuntur suscipit delectus, eaque quidem incidunt sint velit, veritatis debitis odit mollitia nesciunt praesentium dignissimos, rerum inventore reprehenderit laudantium." },
  { id: 2, name: "Shampoo sólido", stock:10, initial:1 ,price:100, img:"https://images.unsplash.com/photo-1628088306750-8da70000db82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vel voluptate consequuntur suscipit delectus, eaque quidem incidunt sint velit, veritatis debitis odit mollitia nesciunt praesentium dignissimos, rerum inventore reprehenderit laudantium." },
  { id: 3, name:  "Acondicionador sólido" , stock:10, initial:1 ,price:100, img:"https://images.unsplash.com/photo-1628088306750-8da70000db82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vel voluptate consequuntur suscipit delectus, eaque quidem incidunt sint velit, veritatis debitis odit mollitia nesciunt praesentium dignissimos, rerum inventore reprehenderit laudantium."},
  { id: 4, name:  "Jabón sólido" , stock:10, initial:1 ,price:100, img:"https://images.unsplash.com/photo-1628088306750-8da70000db82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vel voluptate consequuntur suscipit delectus, eaque quidem incidunt sint velit, veritatis debitis odit mollitia nesciunt praesentium dignissimos, rerum inventore reprehenderit laudantium."},
  { id: 5, name:  "Pasta de dientes ecológica" , stock:10, initial:1 ,price:100, img:"https://images.unsplash.com/photo-1628088306750-8da70000db82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vel voluptate consequuntur suscipit delectus, eaque quidem incidunt sint velit, veritatis debitis odit mollitia nesciunt praesentium dignissimos, rerum inventore reprehenderit laudantium."},
  { id: 6, name:  "Cepillo de bambú" , stock:10, initial:1 ,price:100, img:"https://images.unsplash.com/photo-1628088306750-8da70000db82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", detail:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vel voluptate consequuntur suscipit delectus, eaque quidem incidunt sint velit, veritatis debitis odit mollitia nesciunt praesentium dignissimos, rerum inventore reprehenderit laudantium."},
];

function getItem(id) {
  if (id===undefined) {
      return items
  }else{
      return items.find( producto=> producto.id === id)
  }
}

let tarea = new Promise((resolve) => {
  setTimeout(() => {
      resolve(getItem(6));
  }, 3000);
});

function ItemListContainer(){
      
    const [todos, setTodos] = useState([])
    useEffect(() => {
      tarea
      .then(
        setTodos(items)
      )   
    }, [])

  return (

          <div className='ecommerceCardContainer'>
              <ItemList todos={todos}/>
          </div>
  )
}

export default ItemListContainer;