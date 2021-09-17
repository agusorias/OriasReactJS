import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './Context/CartContext';

function App() {
 
  return (
    <div className='App' >
    <CartContextProvider>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={ItemListContainer}/>
          <Route exact path='/category/:categoriaItem' component={ItemListContainer}/>
          <Route exact path='/item/:id' component={ItemDetailContainer}/>
          <Route exact path='/cart' component={Cart}/>
        </Switch>
      </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
