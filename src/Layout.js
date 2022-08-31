import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Head from './header/Header'
import Product from './product/Product'
import Sidebar from './sidebar/Sidebar'
import './layout.css'

const Layout = () => {

  const [headers, setHeaders] = useState("2");
  const [products,setProducts] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    axios.get(`https://codesandbox.com.ng/market_for_opticals/api/get_products?parent_cat_id=${headers}`)
    .then((res)=>{
      setProducts(res.data)
      console.log(res)
    })
    .catch((err)=>{
    console.log(err)
    })
  },[headers])

  

  return (
    <div>
      <Head headers={headers} setHeaders={setHeaders}/>
      
      <div className="container">
        <div className="sidebar">
          <ul>
            <li><a href="">cyril</a></li>
            <li><a href="">cyril</a></li>
            <li><a href="">cyril</a></li>
            <li><a href="">cyril</a></li>
            <li><a href="">cyril</a></li>
            <li><a href="">cyril</a></li>
            <li><a href="">cyril</a></li>

          </ul>
        </div>
        <div className="main-area">
          <div className='row'>
          {
          products.length > 0 && products.map((product)=>(
            <Product product={product} />
          ))
          }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
