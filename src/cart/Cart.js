import React, { useEffect } from 'react'
import { useState} from 'react'
import Head from '../header/Header'
import Save from '../save/Saved'
import pix from '../images/pr.png'
import { db } from '../Db'
import './cart.css'

const Cart = () => {
    // const [num, setNum] = useState(1);
    // const [cart, setCart] = useState([]);
    // const increaseNum = () => {
    //     if (num < 10) {
    //       setNum(Number(num) + 1);
    //     }
    // };
    
    // const decreaseNum = () => {
    //     if (num > 1) {
    //     setNum(num - 1);
    //     }
    // }

    // useEffect(() => {
    //     db.carts.toArray().then((data) => {
    //         setCart(data);
    //      console.log(data)

    //     });
    // },[])
    
  return (
    <div>
      <Head/>
      <div className="container">
          <div className="checkout-section">
            <div>
                <Save />
                {
                    // cart && cart?.map((item) => (
                        
                    // ))
                }
            </div>
            <div className="card-item">
                <h5>Card Summary</h5>
                <div className="sub">
                    <h6>Sub Total</h6>
                    <p>₦10000</p>
                </div>
                <small>Delivery fee not included yet</small><br />
                <button className='check-btn mt-3'>Checkout (₦10000)</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cart
