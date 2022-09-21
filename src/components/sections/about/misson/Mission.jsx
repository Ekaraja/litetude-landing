import React from 'react'

import illustration from "../../../../assets/images/Illustration1.png"

import './mission.css'

const Mission = () => {
    return (
        <section className="mission__section">
            <div className="mission__content">
                <h3>Mission</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At etiam platea cras dui. A massa blandit rutrum mauris turpis amet faucibus quam. Dui, nisl, dignissim proin quisque. Mauris libero venenatis scelerisque duis integer etiam. Mauris, posuere vitae netus orci, sed vel nam. Non dolor egestas interdum eget facilisi urna, etiam. Sed facilisis tristique ipsum augue risus faucibus ultrices quam.
                </p>
            </div>
            <img className='mission__illustration' src={illustration} alt="Illustration 3 kids telling a story about space" />

        </section>
    )
}

export default Mission