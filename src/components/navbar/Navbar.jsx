import React, { useState } from 'react'
import Search from '../search/Search'
import logo from "../../assets/images/logo.png"
import menuBurger from "../../assets/icons/Icon-burger.svg"


import './navbar.css'

const Navbar = (props) => {


    return (
        <nav className='navbar'>
            <div className="nav__left">
                <button className="icon__btn" onClick={() => props.setOpenSidebar(!props.openSidebar)}>
                    <img src={menuBurger} alt="Menu Burger Icon" />
                </button>
                <img src={logo} className="logo" alt="Litétude Logo"/>
            </div>
            <div className="nav__right">
                <Search />
                <div className="nav__buttons">
                    <button className='register__btn'>Teacher Register</button>
                    <button className='donate__btn'>Donate</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar