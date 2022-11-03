import React from 'react'
import girl from '../assets/girl.jpg'

const Hero = () => {
  return (
    <div className='flex mt-20 space-x-10'>
        <div className="small">
            <small className=''>SPEED UP <br /> COMMUNICATIONS</small>
            <h1>BEST UI/UX DESIGNER</h1>
            <p>AU Studio is the best place for everything
                related to a project, to-do-list or communication
            </p>
        </div>
        <div>
            <img src={girl} alt="" />
        </div>
    </div>
  )
}

export default Hero