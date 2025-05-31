import React from 'react'
import { Link } from 'react-router'

const Card = (props) => {
  return (
    <div className='w-100 h-100 shadow-emerald-900 border-1 rounded-xl p-5 flex flex-col justify-between items-start bg-white hover:shadow-lg transition-shadow duration-300'>
      <Link to='/product' className='w-full h-full flex flex-col justify-between items-start'>
      <div>
        <img src={props.image} alt={props.title} className='w-full h-40 object-cover rounded-lg mb-4 ' />
        <h2 className='text-xl font-semibold mb-2'>{props.title}</h2>
        {/* <p className='text-gray-700 mb-4'>{props.description}</p> */}
        <p className='text-lg font-bold text-green-600'>${props.price}</p>
      </div>
      <div className='mb-0 w-full flex justify-between items-center mt-4'>
        <button className='mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors'>
          Add to Cart
        </button>
        <button className='mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors'>
          Buy
        </button>
      </div>
      </Link>
    </div>
  )
}

export default Card