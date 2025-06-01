import React from 'react'

const Footer = () => {


return (
  <footer className="px-5 py-8 mt-8">
    <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
      <div className="mb-6">
        <h3 className="text-xl font-bold">Green Store</h3>
        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Green Store. All rights reserved.</p>
      </div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
        <ul className="list-none p-0">
          <li>
            <a href="/shop" className=" hover:underline">Shop</a>
          </li>
          <li>
            <a href="/about" className=" hover:underline">About Us</a>
          </li>
          <li>
            <a href="/contact" className=" hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
        <a href="https://facebook.com" className=" mr-4 hover:underline">Facebook</a>
        <a href="https://instagram.com" className=" mr-4 hover:underline">Instagram</a>
        <a href="https://twitter.com" className=" hover:underline">Twitter</a>
      </div>
    </div>
  </footer>
)
}
export default Footer