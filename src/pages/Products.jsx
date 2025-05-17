import axios from "axios"
import { useEffect, useState } from "react"

const Products = () => {

  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products?limit=6')
        console.log(response.data)
      } catch (e) {
        console.log('some thing went wrong', e)
      }
    }
    fetchproducts()
  }, [])

  return (
    <div>
      hi
    </div>
  )
}

export default Products