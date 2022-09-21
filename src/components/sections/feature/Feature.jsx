import React from 'react'
import { features } from '../../../utils/features'
import Card from '../../card/Card'

import './feature.css'

const Feature = () => {
    return (
        <section className="feature__section">
            <h2>Featured Videos</h2>
            <div className="features">
                {features.map((feature) => {
                    return <Card key={feature.id} feature={feature} />
                })}
            </div>
        </section>
    )
}

export default Feature