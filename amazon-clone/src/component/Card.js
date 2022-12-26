import React from 'react'

const Card = ({title, price, rating, imageURL}) => {
    return (
        <div className='card'>
            <p className='title'>{title}</p>
            <p className='price'>$ {price}</p>
            <p className='startRating'>{rating}</p>
            <div className='imageHolder'>
                <img src={imageURL} alt="" />
                <br/>
                <br/>
                <button type="">Add to Cart</button>
            </div>
        </div>
    )
}

export default Card
