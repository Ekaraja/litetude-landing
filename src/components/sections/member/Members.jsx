import React from 'react'
import { members } from "../../../utils/members"

import './members.css'

const Members = () => {
	return (
		<div className="member__section">
			<h3>Board Members</h3>
			<div className="members">
				{members.map((member) => {
					return (
						<div key={member.id} className="member">
							<img className="member__avatar" src={member.avatar} alt={member.title} />
							<p className="member__title">{member.title}</p>
							<p className="member__occupy">{member.occupy}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Members