import React from 'react'
import "./Checkout.css"
import Subtotal from '../Subtotal/Subtotal'
import { useSelector } from 'react-redux'

function Checkout() {

  const items = useSelector((state) => state.allCart)

  return (
    <div className="checkout">
        <div className="checkout-left">
            <img className="checkout-ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Jan_23/Jan_ART/1150x323_GW-editorial._CB615648357_.jpg" alt="" />

            <div>
                <h2 className="checkout-title">Shopping Cart</h2>
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
            </div>
        </div>

        <div className="checkout-right">
            <Subtotal />
        </div> 
    </div>
  )
}

export default Checkout