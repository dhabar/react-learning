const ProductsSkeleton = () =>{
  return(
    <div className="w-screen max-w-6xl mx-auto justify-center p-20 gap-7 grid lg:grid-cols-3 grid-cols-1  rounded">
      {Array(100).fill().map((index)=>(
        <div className="shadow shadow-gray-400 p-2" key={index}>
          
          <div className="h-50 rounded animate-pulse bg-gradient-to-r from-gray-100 to-gray-300 duration-300"></div>
          <div className="pt-2">
            <h1 className="rounded animate-pulse bg-gradient-to-r from-gray-100 to-gray-300 duration-300 h-6"></h1>
          </div>
          <div className="flex gap-4 py-2">
            <h1 className="rounded animate-pulse bg-gradient-to-r from-gray-100 to-gray-300 duration-300 h-6 w-full"></h1>
            <h1 className="rounded animate-pulse bg-gradient-to-r from-gray-100 to-gray-300 duration-300 h-6 w-full"></h1>
          </div>
          <div >
            <h1 className=" h-6 rounded  animate-pulse bg-gradient-to-r from-gray-100 to-gray-300 duration-300"></h1>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductsSkeleton