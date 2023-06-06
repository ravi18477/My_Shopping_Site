import React, { useState ,useEffect } from 'react';


function Cart({cartitem}) {

  useEffect(()=>{},[cartitem])
  
  return (
    <div>
      {cartitem.map(item=>{
        return(
          <div className='item'>
            <img src={require(`../images/trimmers/${item.imgurl}.jpg`)} alt="trimmer" id='itemimage'/>
            <p>{item.prodname}</p>
            <span>₹{item.price}</span>
            <span id='addcartbutton'>Add to Cart</span>

          </div>
        )
      })}
    </div>
  )
}

export default Cart
