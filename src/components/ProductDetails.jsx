import { useNavigate, useParams } from "react-router"

const ProductDetails = () =>{
  const { id } = useParams()
  const navigate = useNavigate()
const handleClick = ()=>{
 navigate(-1)
}
  return(
      <div>
        <button onClick={handleClick} className="p-4 m-4 bg-red-400 rounded w-30 cursor-pointer hover:bg-red-600">← Back</button>
      </div>
  )
}

export default ProductDetails