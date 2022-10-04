// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/Items/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import MapComponent from './components/MapComponent';
// import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenido a Compras Gamers" />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a Compra Gamer'} />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
