import React from 'react'
import girl from '../assets/girl.jpg'
import { FaFigma} from "react-icons/fa";
import { SlDiamond } from "react-icons/sl";


const Hero = () => {
  return (
    <div className='flex mt-20 space-x-10 text-white'>
        <div className="small">
            <small className='text-xs'>SPEED UP  COMMUNICATIONS</small>
            <h1 className='font-bold text-4xl md:text-6xl'>BEST UI/UX DESIGNER</h1>
            <p>AU Studio is the best place for everything
                related to a project, to-do-list or communication
            </p>
          <div className="icons">
            <div className='flex  box-border space-x-5 text-center justify-center bg-zinc-600 p-2 mt-4 w-48 rounded-full '>
              <div className='py-2 flex space-x-3'>
              <FaFigma className=''/>
              <SlDiamond className='text-yellow-300'/>
              </div>
              <button className='border-1 bg-blue-600 rounded-full  px-4 py-2 '>Get is now</button>
            </div>
          </div>
        </div>
        <div className='h-min w-96'>
            <img src={girl} alt="" className='w-full h-full bg-cover'/>
        </div>
    </div>
  )
}

export default Hero