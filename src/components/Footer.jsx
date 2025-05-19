
const Footer = () => {
  return (
    <div className=" flex flex-col justify-center text-center mb-10 mt-20 p-5 container overflow-hidden">
      <p>&copy; dhabar cllaahi</p>
      <h1>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: '2-digit', year: 'numeric',  })}</h1>
    </div>
  )
}

export default Footer