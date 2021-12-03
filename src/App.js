import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {Clicker} from './components/Clicker/Clicker'
import {ItemCount} from './components/ItemCount/ItemCount'
import { ItemListConteiner } from './components/ItemListConteiner/ItemListConteiner';
import { FechaDetail } from './components/FechaDetail/FechaDetail';

function App() {
  return (
    <div className="App">
     <NavBar />
     {/*} 
      <br></br>
      <h2>Proyecto React Venta de entradas</h2>
      <Clicker/>
      <ItemCount/>*/}
      <ItemListConteiner/>
      <h2>ITEM DETAIL</h2>
    </div>
  );
}

export default App;