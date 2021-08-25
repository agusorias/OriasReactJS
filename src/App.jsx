import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Contenido from './components/Greeting/Greeting';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Contenido/>
    </div>
  );
}

export default App;
