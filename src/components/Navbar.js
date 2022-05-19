import React,{useState} from "react";
import "./navbar.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'
import { ImCross} from "react-icons/im";
export default function Navbar(){
    const [showItems,setShowItems] = useState(false)
    const handleToggle = () =>{
        setShowItems(prevState=>!prevState)
    }
    return(
        <>
            <nav className = "navbar">
                <Link to="/">
                    <div className="nav--logo">
                        <img src = {logo} width = "50px"/>
                    <   p className="nav--text"><b>p</b>hoto<b>S</b>tock</p>
                    </div>
                </Link>

                <div className={showItems?"nav--item mobile-nav--item":"nav--item"}>
                    <ul>
                         <Link to="/" onClick={handleToggle}><li>Home</li></Link>
                         <Link to="/featured" onClick={handleToggle}><li>Featured</li></Link>
                         <Link to="/collections" onClick={handleToggle}><li>Collections</li></Link>
                         <Link to="/support" onClick={handleToggle}><li>Support</li></Link>
                    </ul>
                </div>
                <div className="nav--user">
                    <button className="Login" >Login</button>
                    <button className="Signup" >Sign Up</button>
                </div>
                <div className="hamburger" onClick={handleToggle}>{showItems?<ImCross/>:<GiHamburgerMenu />}</div>
            </nav>
        </>
    )
}