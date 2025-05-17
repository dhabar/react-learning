import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Notfaund from './pages/Notfaund'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'

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
        path:'/about',
        element: <About/>
      },
      {
        path:'/contact',
        element: <Contact/>
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
