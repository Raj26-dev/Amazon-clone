import React from 'react';
import Card from './Card';
import './ProductList.scss';
import { useStateValue } from './StateProvider';
const ProductList = () => {
    const {productList} = useStateValue();
    console.log(productList);
    return (
        <div className='productList'>
            {
                productList.map((item, index)=>{
                    return(
                        <Card key={index} {...item}/>
                    )
                })
            }
           
           
        </div>
    )
}

export default ProductList
