import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState} from 'react'
import axios from 'axios'

import { Button }  from '../button/Button'

import Header from '../header/Header'
import './details.css'

const Details = () => {
    const [num, setNum] = useState(1);

    const {id} = useParams();

    console.log(id)
    const [details, setDetails] = useState("");

    useEffect(() => {
        axios.get(`https://codesandbox.com.ng/market_for_opticals/api/get_product_details/${id}`)
        .then((res) => {
            setDetails(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])



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

    const changeImage = (image)=>{
        const product_image = document.getElementById("product-image");
        product_image.src = image;
    }
    
  return (
    <div>
        <Header />
        
          <div className="container mt-3">
            <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-7">
              

            {
                details  && details.image_url.length > 0 ?
                <div>
                    <img src={details?.image_url[0].image_url} alt="" className='mb-3 w-100' id='product-image'/>
                    {
                    details.image_url.map((item) => (
                    <div className="small-img">
                        <img src={item.image_url} alt="" className='small-image' onClick={ ()=>
                            changeImage(item.image_url)
                        }/>
                    </div>
                    ))}
                </div>
                :"no image"
            }
                                        
 
            </div>
            <div className="col-sm-12 col-md-6 col-lg-5">
                <div className="side-item">
                    
                    <h2 className='mb-3'>{details.product_name}</h2>

                    <div className="review-item mb-3">
                        <div className="review-star">
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                        </div>

                        <div className="reviews">
                            <p>3 reviews</p>
                        </div>

                        <div className="add-review">
                            <p>Add Your Review</p>
                        </div>
                    </div>

                    <div className="price-section">
                        <div className="price-item">
                            <h3>₦{details.product_price}</h3>

                            <p><b>IN STOCK</b> <span className='mode'>SKU#: 24-MB05</span></p>
                        </div>
                    </div>

                    <div className="product-sizes">
                        <p><b>Sizes</b></p>
                        <div className='sizes'>
                        {
                           details ? details?.product_sizes.map((item) => (
                                <div>
                                  <p>{item}</p>
                                </div>
                            )) :<h1>no sizes</h1>
                        }
                        </div>
                    </div>

                    <form className='mb-5'>
                        <h5>Qty</h5>
                        <button className='mr-3 qty-down' type='button' onClick={decreaseNum}>-</button>
                        <input type="text" className='input-text2' value={num} disabled/>
                        <button className='qty-up' type='button' onClick={increaseNum}>+</button>
                    </form>
                    <Button 
                        type="button" 
                        buttonStyle="myBtn--chocolate--solid"
                        buttonSize="myBtn--medium"
                        >Add to Cart
                    </Button>
                    <p className='mt-3'><i className="fas fa-heart mr-3"></i>ADD TO WISH LIST</p>
                </div>
            </div>
            </div>
        </div>
        {/* <div className="description-section">
            <p>reliable glasses for you</p>
        </div> */}
        
    </div>
  )
}

export default Details
