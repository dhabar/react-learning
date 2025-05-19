import React from 'react'
import { Link } from 'react-router'

const ProductItems = ({ products }) => {
  return (
    <div>
         <div className='p-4 grid lg:grid-cols-3 md:grid-cols-2 mx-auto max-w-5xl lg:gap-4 w-full text-center container justify-center gap-6 overflow-x-hidden mt-20'>
        {products.map((product) => (
          <Link to={`/productdetails/${product.id}`} key={product.id} className='rounded shadow shadow-gray-400'>
            <div>
              <img src={product.thumbnail} alt={product.title} />
              <h1>{product.title}</h1>
            </div>
            <div className='flex justify-between px-4'>
              <h2 className='text-blue-700'>Price: ${product.price}</h2>
              <h2 className='text-gray-300'>
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </h2>
            </div>
            <div className='text-start m-4'>
              <span className='text-yellow-400 text-4xl'>{'*'.repeat(Math.round(product.rating))}</span>
              <span className='text-gray-200 text-4xl'>{'*'.repeat(5 - Math.round(product.rating))}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductItems