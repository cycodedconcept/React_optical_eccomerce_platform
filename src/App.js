import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout'
import Details from './details/Details';
import Cart from './cart/Cart'
import './App.css';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Layout />}></Route>
            <Route path='/product/:id' element={<Details/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
