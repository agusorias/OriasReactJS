import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {
  return (
    <div className="App" >
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
