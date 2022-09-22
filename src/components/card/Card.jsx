import React from 'react'
import './card.css'

const Card = (props) => {
    return (
        <div className="card" key={props.feature.id}>
            <img className="card__image" src={props.feature.thumbnail} alt="" />
            <div className="card__content">
                <div className="card__avatar">
                    <img src={props.feature.avatar} alt="" />
                </div>
                <div className="card__infos">
                <span>{props.feature.title}</span>
                    <div className="card__infos__theme">
                        <img src={props.feature.icon} alt="" />
                        <span>{props.feature.type}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card