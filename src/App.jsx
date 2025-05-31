import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from './components/Card';


function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        console.log(response.data)
        if (response.status !== 200) {
          throw new Error('Failed to fetch products')
        }
        setProducts(response.data)
      } catch (error) {
        console.log(error)
        setError('Failed to fetch products')
      }
    }
    fetchProducts()
  }, [])
  if (error) {
    return <div>Error: {error}</div>
  }
  return (
    <>
      <div className='flex justify-start items-center h-[10% flex-wrap py-5 px-35 gap-5 bg-white'>
        {products.map(product => (
          <Card key={product.id} {...product} />
        ))}
      </div>      
    </>
  )
}

export default App
