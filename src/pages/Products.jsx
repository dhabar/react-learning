import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductItems from '../components/ProductItems'
import ProductsSkeleton from '../components/ProductsSkeleton'

const Products = () => {
  
  const [loader, setloader] = useState(true)

  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products')
        setproducts(response.data.products)
      } catch (error) {
        console.log('Error fetching products:', error)
      }
      setloader(false)
    }
    fetchproduct()
  }, [])

  return (
    loader ? (
      <ProductsSkeleton/>
    ) : (
     <ProductItems />
    )
  )
}

export default Products
