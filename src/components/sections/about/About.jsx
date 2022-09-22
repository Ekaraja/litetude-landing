import React from 'react'
import Mission from './misson/Mission'
import Story from './story/Story'

import './about.css'

const About = () => {
	return (
		<section className="about__section" id='about'>
			<div className="about__intro">
				<h3>About Litétude</h3>
				<p>
					Lorem Ipsum blah blah blah blah blah blah
					lorem ipsum blah blah blah
				</p>
			</div>
			<Mission />
			<Story />
		</section>
	)
}

export default About