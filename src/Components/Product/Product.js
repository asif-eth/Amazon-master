import React from 'react'
import "./Product.css"
import { useDispatch } from 'react-redux'
// import { add } from "../../Redux/cartSlice"

const Product = ({ title, image, price, rating}) => {
  const dispatch = useDispatch();
  return (
    <div className='product'>
      <div className="product-info">
        <p>{title}</p>
        <p className='product-price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating).fill().map((_,i) => <p>⭐</p>)}
        </div>      
      </div>

      <img src={image} alt="" />

      <button>Add to cart</button>

    </div>
  )
}

export default Product