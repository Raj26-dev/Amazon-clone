import React from 'react';
import Card from './Card';
import './ProductList.scss';
import { useStateValue } from './StateProvider';
const ProductList = () => {
    const {initialState} = useStateValue();
    return (
        <div className='productList'>
            {
                initialState.productList.map((item, index)=>{
                    return(
                        <Card key={index} {...item}/>
                    )
                })
            }
           
          
        </div>
    )
}

export default ProductList
