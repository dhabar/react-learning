/*const ProductItem = ({product}) => {

  return (  
    <div>
      <div className='shadow rounded cursor-pointer border'>
        <div key={product.id} >
         <img src={product.thumbnail} alt="" /> 
         <h1>{product.title}</h1>
        </div>
          <div className='flex justify-between px-4'>
            <h2 className='text-blue-700'>Price : {product.price}</h2>
            <h2 className='text-gray-300'>{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</h2>
          </div>
          <div className='text-start m-4'>
            <span className='text-yellow-400 text-4xl left-0 w-full '>{'*'.repeat(Math.round(product.rating))}</span>
            <span className='text-gray-200 text-4xl left-0 w-full '>{'*'.repeat(Math.round(5 - product.rating))}</span>
          </div>
          </div>
    </div>
  )
}

export default ProductItem */

import React from 'react'

const ProductItem = () => {
  return (
    <div>ProductItem</div>
  )
}

export default ProductItem