import React from 'react'

import './subscribe.css'

const Subscribe = () => {
    return (
        <section className="subscribe__section">
            <div className="subscribe">
                <h4>Join Our Community</h4>
                <p>
                    Get 20% OFF Your First Five Classes When You Sign up
                    For Our Newsletter
                </p>
                <div className="subscribe__input">
                    <input type="text" placeholder="Enter Your Email" />
                    <button className="subscribe__button">Sign up</button>
                </div>
            </div>
        </section>
    )
}

export default Subscribe