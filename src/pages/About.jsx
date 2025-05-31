import React from 'react'

const About = () => {
  return (
  <div className='w-full h-full flex flex-col justify-center items-start p-10 bg-gray-100'>
    <h1 className='text-2xl font-bold'>About Us</h1>
    <p>
      Welcome to ProductStore, your one-stop destination for all your shopping needs! We are passionate about bringing you the best products at unbeatable prices, with a seamless and enjoyable online shopping experience.
    </p>
    <h2 className='text-xl font-bold'>Our Mission</h2>
    <p>
      Our mission is to make online shopping easy, affordable, and accessible for everyone. We carefully curate our product selection to ensure quality and value, and we are committed to providing excellent customer service.
    </p>
    <h2 className='text-xl font-bold'>Why Shop With Us?</h2>
    <ul>
      <li>Wide range of products from trusted brands</li>
      <li>Fast and reliable shipping</li>
      <li>Secure payment options</li>
      <li>Easy returns and exchanges</li>
      <li>Dedicated customer support</li>
    </ul>
    <h2 className='text-xl font-bold'>Contact Us</h2>
    <p>
      Have questions or need help? Reach out to our support team at <a href="mailto:support@productstore.com">support@productstore.com</a>.
    </p>
  </div>
)
}



export default About