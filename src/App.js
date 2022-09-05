import './App.css';
import NavBar from './components/NavBar/NavBar';
import Counter from './components/Counter/Counter'
import Form from './components/Form/Form';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react';
import Titulos from './components/Titulos';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemListContainer greeting="Bienvenidos!"/>
      </header>
    </div>
  );
}


export default App;
