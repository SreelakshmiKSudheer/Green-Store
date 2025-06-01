import React from 'react'

const Contact = () => {
  return (
    <div className="w-200 px-5 py-5" >
      <h2 className='text-xl font-bold'>Contact Us</h2>
      <p>
        Have questions, feedback, or need help with your order? Reach out to our support team!
      </p>
      <form className='flex flex-col gap-4 mt-5'>
        <div className='flex justify-between items-center'>
          <label htmlFor='name'>Name: </label>
          <input type="text" name="name" required className='border-1 mx-4 rounded-md w-[80%]' />
        </div>
        <div className='flex justify-between items-center'>
          <label htmlFor='email'>Email: </label>
          <input type="email" name="email" required className='border-1 mx-4 rounded-md w-[80%]' />
        </div>
        <div className='flex justify-between items-center'>
          <label htmlFor='msg'>Message: </label>
          <input type="text" name="msg" required className='border-1 mx-4 rounded-md w-[80%]' />
        </div>
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white border-none rounded cursor-pointer"
        >
          Send Message
        </button>
      </form>
      <div style={{ marginTop: 32 }}>
        <h4>Customer Support</h4>
        <p>Email: support@productstore.com</p>
        <p>Phone: +1 (800) 123-4567</p>
        <p>Address: 123 Market Street, City, Country</p>
      </div>
    </div>
  )
}

export default Contact