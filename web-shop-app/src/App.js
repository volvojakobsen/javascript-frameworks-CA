import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/navbar';
import { Home } from "./pages/home/home";
import { Cart } from "./pages/cart/cart";
import { ProductDetails } from './pages/productDetails/productDetails';
import { ShopContextProvider, ShopContext } from './context/shop-context.jsx';
import { useState } from 'react';



function App() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home products={products} setProducts={setProducts} search={search} setSearch={setSearch} />} />
            <Route path="/productDetails/:id" element={<ProductDetails products={products} />} />
            <Route path="/cart" element={<Cart products={products} setProducts={setProducts} />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
