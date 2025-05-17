import { Link } from "react-router"

const Notfaund = () => {
  return (
    <div className="justify-center text-center h-screen w-full content-center space-y-9">
      <p className="text-9xl">404 Not Faund Pleas go to Homescreen</p>
      <Link to='/home' className="m-10 bg bg-green-500 p-5 rounded shadow-2xl focus:bg-green-700 ">Go to home screen</Link>
    </div>
  )
}

export default Notfaund