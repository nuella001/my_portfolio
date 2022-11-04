import React from 'react'
import girl from '../assets/girl.jpg'
import { FaFigma} from "react-icons/fa";
import { SlDiamond } from "react-icons/sl";


const Hero = () => {
  return (
    <div className='flex mt-40 space-x-10 '>
        <div className="hero-txt lg:w-1/3 justify-start ml-10">
            <p className=' text-left text-xs'>SPEED UP   <br /> COMMUNICATIONS</p>
            <h1 className=' text-left mt-4 lg:tracking-wide leading-6 font-bold text-4xl md:text-6xl md:max-w-md'>BEST UI/UX DESIGNER</h1>
            <p className='my-5 text-left'>AU Studio is the best place for everything
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