import React from 'react'
import "./header.scss"

import logo from "../../assets/images/Apple Watch.png"
import { IoSearch , IoCartSharp } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";


const Header = () => {
  return (
    <header id="navbar">
        <nav className="container">
            <a className="nav-logo-link" href="#">
                <img src={logo} alt="" />
                <p className="navbars">Mohid</p>
            </a>
            <ul className="nav-list">
                <i className="fa-solid fa-bars"></i>
                <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Brands <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M3.75 5.625L7.5 9.375L11.25 5.625" stroke="#8B8E99" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg></a></li>
                <li className="nav-item"><a href="#" className="nav-link">Recent Products</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About</a></li>
            </ul>
            <div className="header-icon">
                <IoSearch/>
                <IoMdPerson/>
                <div>
                    <IoCartSharp/>
                    <span>1</span>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header