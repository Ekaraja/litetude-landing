import React from 'react'
import { ReactComponent as HomeIcon } from "../../assets/icons/Icon-Home.svg"
import { ReactComponent as SettingIcon } from "../../assets/icons/Icon-Setting.svg"
import { ReactComponent as SmsIcon } from "../../assets/icons/Icon-Sms.svg"
import { ReactComponent as UsersIcon } from "../../assets/icons/Icon-Users.svg"
import avatar from "../../assets/images/avatar2.svg"

import { sidebarMenu } from '../../utils/sidebar'

import './sidebar.css'


const Sidebar = () => {
	return (
		<div className='sidebar'>
			<ul className="sidebar__menu">
				{sidebarMenu.map((menu) => {
					return (
						<li key={menu.id}>
							<img className="sidebar__icon" src={menu.icon} alt={menu.alt} />
							<span>{menu.title}</span>
						</li>
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
	)
}

export default Sidebar