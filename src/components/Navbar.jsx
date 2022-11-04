import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="nav flex justify-between align-center mx-10">
        <div className="logo">
          <h1>Chioma</h1>
        </div>
        <div className="links  space-x-4">
          <a href="#" className='border-b-2 border-blue-600'>Home</a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Pricing</a>
        </div>
        <div className="btn">
          <button className='border px-4 py-1 rounded-full'>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar