import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto'
import CartContainer from './components/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext';


function App() {
  return (

    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <div>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Bienvenidos!" />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/productos' element={<ItemListContainer />} />
              <Route path='/productos/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartContainer/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>

  );
}


export default App;

//<NavBar />
//<header className="App-header">
//  <ItemListContainer greeting="Bienvenidos!" />
//  <ItemDetailContainer />
//</header> 