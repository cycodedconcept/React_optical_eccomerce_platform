import React from 'react'
import { useState} from 'react'
import './product.css'
import { Button }  from '../button/Button'
import Heart from '../images/Heart.png'
import { db } from '../Db'


const Product = ({product}) => {
    const [num, setNum] = useState(1);
    const [data, setData] = useState([]);
    const {brand, image_url, owner_id, product_name, product_price, stock} = product;

    const handleClick = async (item) => {
      await db.carts.add({
        brand: `${item.brand}`,
        image_url: `${item.image_url}`,
        owner_id: `${item.owner_id}`,
        product_name: `${item.product_name}`,
        product_price: `${item.product_price}`,
        stock: `${item.stock}`
      })
      console.log(item);
    };


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

  return(
    <div className="col-sm-12 col-md-12 col-lg-4">
        <div className="service-card mb-3">
            <div className="get-position">
                <img src={product.image_url} alt="" />
                <Button type="button" buttonStyle="myBtn--transparent--solid" buttonSize="myBtn--xsmall">50% off</Button>
                <Button type="button" buttonStyle="myBtn--outline--solid" buttonSize="myBtn--xsmall"><img src={Heart} alt="heart" className='img-heart'/>save</Button>
            </div>
            <p className='m-0 p-0'>{product.product_name}</p>
            <p>{product.stock}</p>
            <div className="details-side">
              <small className='para'>₦{product.product_price}</small>
              <a href={"/product/" + product.id}><button className='view-details'>view details</button></a>
            </div>
            
            <div className="row">
                <div className="col-lg-6">
                  <small>free delivery</small>
                </div>
                <div className="col-lg-6">
                  <form>
                    <button className='mr-3 qty-down' type='button' onClick={decreaseNum}>-</button>
                    <input type="text" className='input-text' value={num} disabled/>
                    <button className='qty-up' type='button' onClick={increaseNum}>+</button>
                  </form>
                </div>
            </div>
            <div className="d-flex mt-3 justify-content-between">
              <div className="rating font-size-12">
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
                <span><i className="fas fa-star"></i></span>
                <span><i className="far fa-star"></i></span>
                </div>
                <p>100</p>
                <div>
                <Button 
                type="button" 
                buttonStyle="myBtn--chocolate--solid"
                buttonSize="myBtn--cart-small"
                onClick={() => handleClick(product)}
                >Add to Cart</Button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Product