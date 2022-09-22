import React from 'react'

import { founders } from "../../../../utils/founders"
import './story.css'


const Story = () => {
    return (
        <section className="story__section">
            <div className="founders">
                {founders.map((founder) => {
                    return (
                        <div key={founder.id} className="member">
                            <img className="member__avatar" src={founder.avatar} alt={founder.title} />
                            <p className="member__title">{founder.title}</p>
                            <p className="member__occupy">{founder.occupy}</p>
                        </div>
                    )
                })}
            </div>
            <div className="content__wrapper">
                <div className="content">
                    <h3>Founder Story</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At etiam platea cras dui. A massa blandit rutrum mauris turpis amet faucibus quam. Dui, nisl, dignissim proin quisque. Mauris libero venenatis scelerisque duis integer etiam. Mauris, posuere vitae netus orci, sed vel nam. Non dolor egestas interdum eget facilisi urna, etiam. Sed facilisis tristique ipsum augue risus faucibus ultrices quam.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Story