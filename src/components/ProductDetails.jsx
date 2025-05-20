import { useNavigate, useParams } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"

const ProductDetails = () => {
  const [product, setProduct] = useState({})
  const [mainImage, setMainImage] = useState(null)
  const [loader, setLoader] = useState(true)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`)
        console.log(response.data)
        setProduct(response.data)
        setMainImage(response.data.thumbnail)
      } catch (error) {
        console.log(error)
      } finally {
        setLoader(false) // Correct place to stop loading
      }
    }
    fetchProductDetails()
  }, [id])

  const handleClick = () => {
    navigate(-1)
  }

  const handleCheck = (image) => {
    setMainImage(image)
  }

  return (
    <div>
      <button onClick={handleClick} className="p-4 m-4 bg-red-400 rounded w-30 cursor-pointer hover:bg-red-600">
        ← Back
      </button>
      {loader ? (
        <h1>loading...</h1>
      ) : (
        <div className="lg:flex w-full max-w-5xl gap-20 justify-between mx-auto p-6 container grid">
          <div className="lg:w-1/3 p-10 lg:p-0">
            <div className="shadow shadow-gray-400 justify-center lg:pl-10 w-full p-10">
              <img src={mainImage} alt="Main Product" />
            </div>
            <div className="h-50 shadow shadow-gray-500 mt-6 overflow-x-auto p-4 flex max-w-3xl">
              <div className="flex gap-3 w-full">
                {product.images?.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    onClick={() => handleCheck(image)}
                    className="gap-5 rounded shadow shadow-gray-500 h-40 w-40 object-cover cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:space-y-5">
            <h1 className="text-center">{product.description}</h1>
            <div className="flex justify-between px-5 pt-6">
              <h2 className='text-blue-700'>Price: ${product.price}</h2>
              <h2 className='text-gray-300'>
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </h2>
            </div>
            <div className='text-start m-4'>
              <span className='text-yellow-400 text-4xl'>{'*'.repeat(Math.round(product.rating))}</span>
              <span className='text-gray-200 text-4xl'>{'*'.repeat(5 - Math.round(product.rating))}</span>
            </div>
            <div>
              <button className="p-4 m-4 bg-red-400 rounded w-30 cursor-pointer hover:bg-red-600">Add to cart</button>
            </div>
          </div>
        </div>)
    }
    
    </div>
  )
}

export default ProductDetails
