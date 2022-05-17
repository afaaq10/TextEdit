import React from 'react'
import { CardStyle } from '../components/styles/card.styled'
import im from '../components/img/imsv/illustration-flowing-conversation.svg'
function Card({ item: { id, title, body } }) {

    return (
        <CardStyle layout={id % 2 == 0 && "row-reverse"}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <img src={im} alt='image' />
            </div>

        </CardStyle>
    )
}

export default Card
