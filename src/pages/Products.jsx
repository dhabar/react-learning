
import data from '../assets/data/Products.json'
import ProductItem from '../components/ProductItem'

const Products = () => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 mx-auto max-w-5xl lg:gap-4 w-full mt-10 text-center container justify-center gap-6 overflow-x-hidden'>
      {data.products.map((product) =>(
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
      ))}
    </div>
   
  )
}
//<ProductItem key={product.id} product={product}/>
export default Products