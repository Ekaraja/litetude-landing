import React from 'react'

import { ReactComponent as Logo } from "../../assets/images/logo.svg"

import facebookIcon from "../../assets/icons/Icon-Facebook.svg"
import linkedInIcon from "../../assets/icons/Icon-LinkedIn.svg"
import instagramIcon from "../../assets/icons/Icon-Instagram.svg"
import tiktokIcon from "../../assets/icons/Icon-Tiktok.svg"


import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer__section">
                <div className="logo">
                        <Logo />
                        <p>
                            Here goes some information about the complete system and it will be nice to have some lines about the problem we are solving in a net shell.
                        </p>
                    <ul className="socials">
                        <li>
                            <img src={facebookIcon} alt="Facebook Icon" />
                        </li>
                        <li>
                            <img src={linkedInIcon} alt="LinkedIn Icon" />
                        </li>
                        <li>
                            <img src={instagramIcon} alt="Instagram Icon" />
                        </li>
                        <li>
                            <img src={tiktokIcon} alt="Tiktok Icon" />
                        </li>
                    </ul>
                </div>
                <div className="footer__list">
                    <h5>Resources</h5>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Press</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="footer__list">
                    <h5>Contact</h5>
                    <ul>
                        <li>611 Okeefa, New Orleans, LA</li>
                        <li>iamosahan@gmail.com</li>
                        <li>+61 525 240 310</li>
                    </ul>
                </div>
            </div>
            <p style={{ textAlign: "center" }}>&copy;copyright2022 <span style={{ color: "#0080BF" }}> www.litetude.org </span>  all rights reserved</p>
        </footer>
    )
}

export default Footer