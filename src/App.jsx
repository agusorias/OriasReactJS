import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Contenido from './components/Greeting/Greeting';
import EcommerceCard from './components/Cards/EcommerceCard';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Contenido/>
      <div className="ecommerceCardContainer">
        <EcommerceCard elemento="Bolsa de tela"stock="5" inicial="1"/>
        <EcommerceCard elemento="Cepillo de bambú"stock="100" inicial="1"/>
        <EcommerceCard elemento="Acondicionador sólido"stock="10" inicial="1"/>
        <EcommerceCard elemento="Shampoo sólido"stock="8" inicial="1"/>
      </div>
    </div>
  );
}

export default App;
