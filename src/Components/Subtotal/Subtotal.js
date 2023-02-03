import React from 'react'
import "./Subtotal.css"

function Subtotal() {
  return (
        <div className="sidebar">
            <div className="sidebar-head">
                Subtotal (0 Item): <b>0</b>
            </div>

            <div className="contains-gift">
                <input type="checkbox" id="contains-gift" />
                <label for="">This order contains GIFT</label>
            </div>

            <button className="proceed-buy">Proceed to Buy</button>
        </div>
  )
}

export default Subtotal