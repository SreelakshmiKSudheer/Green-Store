import React from 'react'
import { Link } from 'react-router'
import { ShoppingCart } from 'lucide-react'


const Header = () => {
  return (
    <header>
      <nav className='h-[10%] bg-white flex justify-between items-center px-10 py-3'>
        <div className='flex justify-center items-center gap-2'>
          <ShoppingCart color="#028500" strokeWidth={3.5} size={36}/>
          <h1 className='font-bold text-4xl '><Link to='/'>Green Store</Link></h1>
        </div>
        <div className='flex justify-center items-center gap-5 text-lg font-medium'>
          <h4><Link to='/about'>About Us</Link></h4>
          <h4><Link to='/contact'>Contact Us</Link></h4>
        </div>
      </nav>
    </header>
  )
}

export default Header