import React, { useState } from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import About from '../components/sections/about/About'
import Feature from '../components/sections/feature/Feature'
import Hero from '../components/sections/hero/Hero'
import Hiw from '../components/sections/hiw/Hiw'
import Members from '../components/sections/member/Members'
import Subscribe from '../components/sections/subscribe/Subscribe'
import Sidebar from '../components/sidebar/Sidebar'

import './home.css'

const Home = () => {
	const [openSidebar, setOpenSidebar] = useState(false)
	return (
		<>
			<Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
			<div className='home__page' id='home'>
				<div className="left">
					{openSidebar && <Sidebar />}
				</div>
				<div className="main">
					<div className="main__content">
						<Hero />
						<Feature />
						<Hiw />
						<About />
						<Members />
						<Subscribe />
					</div>
					<Footer />
				</div>
			</div>
			
		</>
	)
}

export default Home