import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductDetails from './components/products/ProductDetails';
import ProductForm from './components/products/ProductForm';
import ProductList from './components/products/ProductList';
import UpdateProduct from './components/products/UpdateProduct';
import { Route, Routes } from 'react-router';
import './App.css'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/:productId' element={<ProductDetails />} />
        <Route path='/products/new' element={<ProductForm />} />
        <Route path="/products/:productId/edit" element={<UpdateProduct />} />
      </Routes>
    </>
  )
}

export default App
