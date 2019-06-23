import React from 'react'
import './Card.css'
import Quote from './Quote'
import Buttons from './Buttons'

const Card = () => {
    return(
        <div className='tc grow bg-near-white br3 pa3 ma2 dib bw2 shadow-5'> 
            <Quote />
            <Buttons />
        </div>
    )
}

export default Card