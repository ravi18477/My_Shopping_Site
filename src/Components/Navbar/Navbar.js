import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import {GiHamburgerMenu } from 'react-icons/gi';
import "./style.css";

function Navbar() {
  return (
    <div className='nav'>
       <div className='logo'>My Shopping App</div>

       <input type="checkbox" name="" id="check" />
       <label htmlFor="check"><GiHamburgerMenu id='menuicon'></GiHamburgerMenu></label>
       
       <label className="searchbar">
       <input id="searchbar" type="text" placeholder='App.in'/>
       <button id="searchicon"><BsSearch></BsSearch></button>
       
       </label>
       
      
      <ul>
        <li>
          <Link id="link" to="/">Home</Link>
        </li>
        <li>
          <Link  id="link"to="/login">Login</Link>
        </li>
        <li>
          <Link id="link" to="/cart">Cart</Link>
        </li>
        <li>
          <Link id="link" to="/aboutus">About us</Link>
        </li>
      </ul>

     

      
    </div>
  )
}

export default Navbar
