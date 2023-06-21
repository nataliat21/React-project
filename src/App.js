import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Tiendas } from './components/Tiendas/Tiendas';
import { Nosotros } from "./components/Nosotros/Nosotros";
import { HazteMayorista } from './components/HazteMayorista/HazteMayorista';
import { Cart } from './components/Cart/Cart';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import { CartProvider } from './contex/CartContext';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <div className="App">
      <div>
          <NavBar></NavBar>
          <Routes>
          <Route path= "/" element={<ItemListContainer/>}></Route>
            <Route path= "/inicio" element={<ItemListContainer/>}></Route>
            <Route path= "/tiendas" element={<Tiendas/>}></Route>
            <Route path= "/nosotros" element={<Nosotros/>}></Route>
            <Route path= "/haztemayorista" element={<HazteMayorista/>}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart></Cart>} />
            
          </Routes>
      </div>
    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
