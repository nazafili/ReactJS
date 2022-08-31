import './App.css';
import NavBar from './components/NavBar/NavBar';
import Counter from './components/Counter/Counter'
import Form from './components/Form/Form';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">

        <Counter stock={5}/>

      </header>
    </div>
  );
}


export default App;
