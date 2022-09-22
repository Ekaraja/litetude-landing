import React from 'react'
import Search from '../search/Search'
import logo from "../../assets/images/logo.png"
import menuBurger from "../../assets/icons/Icon-burger.svg"

import { useScrollPosition } from '../../utils/hooks/useScrollPosition'

import './navbar.css'

const Navbar = (props) => {

    const scrollPosition = useScrollPosition();

    return (
        <nav className={`navbar ${scrollPosition? '--shadow' : null}`}>
            <div className="nav__left">
                <button className="icon__btn" onClick={() => props.setOpenSidebar(!props.openSidebar)}>
                    <img src={menuBurger} alt="Menu Burger Icon" />
                </button>
                <img src={logo} className="nav__logo" alt="Litétude Logo"/>
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