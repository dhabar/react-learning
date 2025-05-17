import { Outlet } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Navbar"

const App = () => {
  return (
    <div className="pt-20 lg:pt-18 ">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App