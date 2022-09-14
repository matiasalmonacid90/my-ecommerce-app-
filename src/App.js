import './App.css';
import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./itemList/ItemListContainer"
import ItemCount from "./ItemCount/ItemCount";
import ItemDetail from './itemDetail/itemDetail';
import ItemDetailContainer  from './itemDetail/itemDetailContainer';

function App() {
  function onAdd(count) {
    console.log(count)
  }
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <ItemCount stock={15} initial={1} onAdd={onAdd} /> 
    


      <header className="App-header">
        <h1>E-commerce Sochi</h1>


      </header>
    </div>
  );
}

export default App;

