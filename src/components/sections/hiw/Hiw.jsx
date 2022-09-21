import React from 'react'

import { hiw } from "../../../utils/hiw"



import './hiw.css'
import Video from './video/Video'
const Hiw = () => {
    return (
        <section className="hiw__section">
            <h2>How Litétude works</h2>
            <Video />
            <div className="hiw__cards">
                {hiw.map((card) => {
                    return (
                        <div key={card.id} className={`${card.className} hiw__card`}>
                            <div className="hiw__icon">
                                <img src={card.icon} alt="" />
                            </div>
                            <div className="hiw__content">
                                <h5>{card.title}</h5>
                                <p>{card.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Hiw