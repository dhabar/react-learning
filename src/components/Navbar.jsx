import { useState } from "react";
import { Link } from "react-router"

const Header = () => {
    const [MenuOpen, setMenuOpen] = useState(false)
     const handleClick = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className="shadow fixed top-0 left-0 right-0 z-10 backdrop-blur-md bg-white opacity-96">
        <div className="flex justify-between w-full max-w-6xl mx-auto p-5 z-10 ">
            <Link to='/home' className="text-2xl">Shopyfy</Link>
            <button className="lg:hidden text-4xl cursor-pointer" onClick={handleClick}>≣</button>
            <ul className={ `lg:flex lg:space-x-4 ${ MenuOpen ? 'flex flex-col lg:flex-row absolute lg:static  top-20 w-full z-10  lg:w-auto left-0 p-6 lg:p-0 text-center shadow space-y-6 lg:space-y-0 bg-white lg:bg-none ' : 'hidden' }` }>
                <li><Link className="hover:text-pink-600 " to="/home">Home</Link></li>
                <li><Link className="hover:text-pink-600 " to="/products">Products</Link></li>
                <li><Link className="hover:text-pink-600 " to="/about">About</Link></li>
                <li><Link className="hover:text-pink-600 " to="/cart">Cart</Link></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Header