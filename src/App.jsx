import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App' >
      <Router>

        <NavBar/>
        <Switch>
          <Route exact path='/' component={ItemListContainer}/>
          <Route exact path='/category/:categoriaItem' component={ItemListContainer}/>
          <Route exact path='/item/:id' component={ItemDetailContainer}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
