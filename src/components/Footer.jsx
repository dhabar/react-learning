
const Footer = () => {
  return (
    <div className=" flex flex-col justify-center text-center mb-10 mt-10 p-5 container ">
      <p>&copy; dhabar cllaahi</p>
      <h1>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: '2-digit', year: 'numeric',  })}</h1>
    </div>
  )
}

export default Footer