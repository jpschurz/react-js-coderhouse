import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import ProductList from './components/ProductList'
import CardDetail from './components/CardDetail'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'


function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<ProductList productos={productos} />} />
      <Route path="/products/:id" element={<CardDetail />} />
      <Route path="/products/category/electronics" element={<ItemListContainer productos={productos} />}/>
      <Route path="/products/category/electronics" element={<ItemListContainer productos={productos} />}/>
      <Route path="/products/category/electronics/:id"  element= {<CardDetail productos={productos}/>} />
      <Route path="/products/category/men's clothing" element={<ItemListContainer productos={productos} />}/>
      <Route path="/products/category/men's clothing/:id"  element= {<CardDetail productos={productos}/>} />
      <Route path="/products/category/jewelery" element={<ItemListContainer productos={productos} />}/>
      <Route path="/products/category/jewelery/:id"  element= {<CardDetail productos={productos}/>} />
      <Route path="/404" element={<img className="img-404" src="src/assets/404.png/" />}/>
    </Routes>
    </BrowserRouter>    
    </>
  );  
}

export default App