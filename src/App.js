import './App.css';
import NavBar from "./components/functionalComponents/NavBar";
import ItemListContainer from "./../src/components/functionalComponents/ItemListContainer";
import ItemCount from './components/functionalComponents/ItemCount';



function App() {
  function onAdd(count) {
    console.log(count)
  }
  return (
    <div className="App">
      <NavBar />

      <ItemListContainer nombre="Accesorios" url={"/"} />
      <ItemListContainer nombre="Mujer" url={"/"} />
      <ItemListContainer nombre="Hombre" url={"/"} />
      <ItemCount stock={15} initial={1} onAdd={onAdd} /> 
    
    

      <header className="App-header">
        <h1>E-commerce Sochi</h1>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

