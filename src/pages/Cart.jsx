
import data from '../assets/data/Products.json'
import ProductItem from '../components/ProductItem'

const Cart = () => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 mx-auto max-w-5xl lg:gap-4 w-full mt-10 text-center container justify-center gap-6 overflow-x-hidden'>
      {data.products.map((product) =>(
        <ProductItem product={product}/>
      ))}
    </div>
   
  )
}

export default Cart