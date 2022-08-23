import logo from './logo.svg';
import './App.css';
import NavBar from "./components/functionalComponents/NavBar";


function App() {
  return (
    <div className="App">
    <NavBar/>
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
