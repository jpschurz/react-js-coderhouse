import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Button from './components/Button'
import Home from './components/Home'
import ProductList from './components/ProductList'
import CardDetail from './components/CardDetail'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import CartWidget from './components/CartWidget'

function App() {
  
  
  const [productos, setProductos] = useState([]);

  useEffect(() => {-
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);
  
  return (
    <>
    <BrowserRouter>
      <Navbar>
        <CartWidget />
      </Navbar>
      <main>
      <ItemListContainer greeting="Tienda de productos" />
      <Button texto="Login" />
      </main>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/products"
          element={<ProductList productos={productos} />}
        />
        <Route path="/products/:id" element={<CardDetail />} />
        <Route path="/cart" element={<h3>Cart</h3>} />
        <Route path="/404" element={<h2>404 Not Found</h2>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      </BrowserRouter>      
    </>
  )
  
}

export default App