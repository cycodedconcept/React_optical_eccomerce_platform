import React from 'react'
import { useEffect } from 'react'
import { useState} from 'react'
import { db } from '../Db'
import './saved.css'


const Saved = () => {
    const [num, setNum] = useState(1);
    const [cart, setCart] = useState([]);

    const increaseNum = () => {
        if (num < 10) {
          setNum(Number(num) + 1);
        }
    };
    
    const decreaseNum = () => {
        if (num > 1) {
        setNum(num - 1);
        }
    }

    useEffect(() => {
        db.carts.toArray().then((data) => {
            setCart(data);
           console.log(data)

        });
    },[])

  return (
    <div>
        <div>
            <div className='main mb-3'>
                <div className="cartItem">
                    <img src={cart.image_url} alt="" className='mb-3'/>
                    <div>
                        <p>{cart.product_name}</p>
                        <p>free delivery</p>
                        <p>{cart.stock}</p>
                    </div>
                    <div className="item-price">
                        <p>₦{cart.product_price}</p>
                    </div>
                </div>
                <div className="bottom-item">
                    <i className='fa fa-trash'><span className='check'>Remove</span></i>
                    <form>
                        <button className='mr-3 qty-down' type='button' onClick={decreaseNum}>-</button>
                        <input type="text" className='deck' value={num} disabled/>
                        <button className='qty-up m-0' type='button' onClick={increaseNum}>+</button>
                    </form>
                </div>          
            </div>
            
        </div>
    </div>
  )
}

export default Saved
