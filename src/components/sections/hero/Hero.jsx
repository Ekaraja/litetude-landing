import React from "react";
import hero from "../../../assets/images/hero.png"
import illustration from "../../../assets/images/Illustration3.svg"

import './hero.css'

const Hero = () => {
	return (
		<header>
			<div className="header__section">
				<div className="content__left">
					<h1>Are You Ready To Get Lit?</h1>
					<p className="header__desc">
						Lorem ipsum blah blah blah blah blah blah <br />
						lorem ipsum blah blah blah blah
					</p>
					<div className="buttons">
						<button className="action--btn teacher-login__btn">Teacher Login</button>
						<button className="action--btn student-login__btn">Student Login</button>
					</div>
				</div>
				<div className="content__right">
					<img className="hero__img" src={hero} alt="kid using laptop and smiling :)" />
				</div>
			</div>

		</header>
	);
};

export default Hero;
