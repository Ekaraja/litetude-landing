import React from 'react'
import Mission from './misson/Mission'
import Story from './story/Story'

import './about.css'

const About = () => {
	return (
		<section className="about__section">
			<h3 style={{ textAlign: "center" }}>About Litétude</h3>
			<p style={{ textAlign: "center" }}>
				Lorem Ipsum blah blah blah blah blah blah
				lorem ipsum blah blah blah
			</p>
			<Mission />
			<Story />
		</section>
	)
}

export default About