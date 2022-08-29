import './App.css';
import NavBar from './components/NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <p>
          Bienvenidos a la tienda de Gabriela.
        </p>
      </header>
    </div>
  );
}

export default App;
