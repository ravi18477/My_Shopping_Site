import React from 'react';
import "./style.css";

function Homeclone({itemList,additemto}) {
   
  function itemtocart(item){
    additemto(item);
  }
   
  
  return (
    <div className='itemrow'>
      { itemList.map((item) => {
        return (
          <div className='item'>
            <img src={require(`../images/trimmers/${item.imgurl}.jpg`)} alt="trimmer" id='itemimage'/>
            <p>{item.prodname}</p>
            <span>₹{item.price}</span>
            <span id='addcartbutton' onClick={()=>{itemtocart(item)}}>Add to Cart</span>

          </div>
        )
       })}
    
    </div>
  )
}

export default Homeclone;
