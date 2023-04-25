import React from 'react'
import './Cart.scss'
import cart from '../../assets/images/cart.png'
function Cart() {
    return (
        <div className='cart'>
            <img src={cart} alt="Image description" />
            <span>CART</span>
        </div>
    )
}

export default Cart