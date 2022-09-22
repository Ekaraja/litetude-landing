import React from 'react'
import avatar from "../../assets/images/avatar2.svg"

import { sidebarMenu } from '../../utils/sidebar'

import './sidebar.css'


const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className="sidebar__content">
				<ul className="sidebar__menu">
					{sidebarMenu.map((menu) => {
						return (
							<a href={menu.url} key={menu.id}>
								<li>
									<img className="sidebar__icon" src={menu.icon} alt={menu.alt} />
									<span>{menu.title}</span>
								</li>
							</a>
						)
					})}
				</ul>
				<hr />
				<div className="subcription">
					<p>Subcriptions</p>
					<div className="subscription__info">
						<div className="avatar">
							<img src={avatar} alt="Avatar" />
						</div>
						<p>Litetude</p>
						<div className="subscription__count">
							<span>2</span>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Sidebar