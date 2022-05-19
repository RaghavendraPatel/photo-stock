import React from 'react';
import logo from "../logo.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className = "footer">
         <Link to="/">
            <div className="footer--logo">
              <img src = {logo} width = "50px"/>
            <   p className="nav--text"><b>p</b>hoto<b>S</b>tock</p>
            </div>
          </Link>
          <div className = "footer--items">
            <ul>
              <Link to="/" ><li>Home</li></Link>
              <Link to="/featured"><li>Featured</li></Link>
              <Link to="/collection"><li>Collections</li></Link>
              <Link to="/support"><li>Support</li></Link>
            </ul>
          </div>
    </div>
  )
}

export default Footer