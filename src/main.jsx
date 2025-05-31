import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import Layout from './routes/Layout.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {path: '/', element: <App />},
      {path: '/about', element: <About />},
      {path: '/contact', element: <Contact />},
      {path: '/product', element: <Product />},
    ] 
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
