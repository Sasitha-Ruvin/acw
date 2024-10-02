import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Facial from './Pages/Facial';
import Cart from './Pages/Cart';

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element ={<Products/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/facial' element={<Facial/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
  
  )
}
