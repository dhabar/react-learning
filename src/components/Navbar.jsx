import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => setMenuOpen((prev) => !prev);

  return (
    <div className="shadow fixed top-0 left-0 right-0 z-10 backdrop-blur-md bg-white opacity-96 overflow-hidden">
      <div className="flex justify-between w-full max-w-6xl mx-auto p-5 z-10">
        <Link to="/home" className="text-2xl">Shopyfy</Link>
        <ul
          className={`lg:flex lg:p-0 lg:w-auto lg:gap-6 ${menuOpen ? 'block top-48  text-black p-25 w-full space-y-5 ' : 'hidden'} `}>
          <li><Link className="hover:text-pink-600" to="/home">Home</Link></li>
          <li><Link className="hover:text-pink-600" to="/products">Products</Link></li>
          <li><Link className="hover:text-pink-600" to="/about">About</Link></li>
          <li><Link className="hover:text-pink-600" to="/cart">Cart</Link></li>
        </ul>
        <button className="lg:hidden text-3xl fixed right-5" onClick={handleClick}>≣</button>
      </div>
    </div>
  );
};

export default Header;
