import React from 'react'
import Rating from './Rating'
const Card = ({title, price, rating, imageURL}) => {

    const handelAdd =()=> {
        console.log("test")
    }
    return (
        <div className='card'>
            <p className='title'>{title}</p>
            <p className='price'>$ {price}</p>
            <p className='startRating'>{<Rating rate={rating}/>}</p>
            <div className='imageHolder'>
                <img src={imageURL} alt="" />
                <br/>
                <br/>
                <button onClick={handelAdd} type="">Add to Cart</button>
            </div>
        </div>
    )
}

export default Card
