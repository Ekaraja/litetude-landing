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
							<h6 className="member__title">{member.title}</h6>
							<h5 className="member__occupy">{member.occupy}</h5>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Members