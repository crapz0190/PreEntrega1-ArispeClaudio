import './App.css';
import NavBar from './Component/NavBar/NavBar';
import CartWidget from './Component/CartWidget/CartWidget';
import Title from './Component/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div> 
      <header>
        <NavBar/>
        <CartWidget/>
      </header>
      <div>
        <Title texto="Bienvenido a TiendaOnline!"/>
      </div>
    </div>
  );
}

export default App;
