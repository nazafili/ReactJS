import './App.css';
import NavBar from './components/NavBar/NavBar';
import Counter from './components/Counter/Counter'
import Form from './components/Form/Form';
import { useEffect, useState } from 'react';

function App() {

  const [contador, setContador] = useState(0);
  const suma = () => {
    setContador(contador + 1);
  }
  const resta = () => {
    setContador(contador - 1);
  }


  return (
    <div className="App">
      <NavBar />
      <header className="App-header">

        <button onClick={suma}>Suma</button>
        {contador < 5 ? <Counter  stock={5} initial={0}/> : null}
        <h2>{contador}</h2>
        <button onClick={resta}>Resta</button>
        
        <div>
          <Form />
        </div>

      </header>
    </div>
  );
}


export default App;
