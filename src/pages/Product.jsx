import React from 'react'
import { useLocation } from 'react-router'

const Product = () => {
  const location = useLocation()
  const { product } = location.state || {};

  if (!product) {
    return (
      <div className='w-full h-full flex flex-col items-center justify-center p-5 m-5  bg-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold'>Product not found</h2>
      </div>
    )
  }
  return (
    <div className='w-full h-full flex flex-col items-start justify-start p-5 m-5 bg-white shadow-lg rounded-lg'>
      <img src={product.image} alt={product.title}  className='w-auto h-100 object-fit mx-auto rounded-lg mb-4'/>
      <h2 className='text-2xl font-bold'>{product.title}</h2>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
    </div>
  )
}

export default Product