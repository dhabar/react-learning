import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Products from './pages/Products'
import About from './pages/About'
import Notfaund from './pages/Notfaund'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetails from './components/ProductDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [

      {
        path:'/home',
        element: <Home/>
      },
      {
        path:'/products',
        element: <Products/>
      },
      {
        path:'/productdetails/:id',
        element: <ProductDetails/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/cart',
        element: <Cart/>
      },
      {
        path: '*',
        element: <Notfaund/>
      },
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
