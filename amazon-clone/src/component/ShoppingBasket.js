import React from 'react';
import "./ShoppingBasket.scss"
import { FaStar } from "react-icons/fa";
const ShoppingBasket = () => {
  return (
    <div className="shoppingBasket">
    <h2>Your Shopping Basket</h2>
    <hr/>
    <ul className='list'>
      
        <li >
          <div className='imageHolder'>
            <img src="https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_SY400_.jpg" alt="" />
          </div>
          <div className='itemDeatils'>
            <div>Amet do fugiat officia exercitation exercitation eiusmod ad aliqua duis minim.</div>
            <p><strong>$ 1.0</strong></p>
            <div> <FaStar color='red'/></div>
            <button >Remove from Cart</button>
          </div>
        </li>
      
    </ul>
  </div>
  )
}

export default ShoppingBasket
