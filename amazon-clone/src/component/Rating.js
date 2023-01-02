import React from 'react'
import { FaStar } from 'react-icons/fa'

const Star =({selected})=> <FaStar color={selected ? "red" : "gray"}/>

const Rating = ({rate}) => {
  return Array(5).fill().map((item, i)=> <Star key={i} selected={rate > i}/>)
}

export default Rating
