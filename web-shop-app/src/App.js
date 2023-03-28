import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/navbar';
import { Home } from "./pages/home/home";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider, ShopContext } from './context/shop-context.jsx';
import { useState } from 'react';



function App() {

  const [products, setProducts] = useState([]);
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home products={products} setProducts={setProducts} />} />
            <Route path="/cart" element={<Cart products={products} setProducts={setProducts} />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
