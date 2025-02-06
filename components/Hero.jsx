import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 mt-4'>
        
        {/* Hero Left Side */}

        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-gray-200'>
            <div className='text-[#414141] bg-gray-200'>
                <div className='flex items-center gap-2 bg-gray-200'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base bg-gray-200'>OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed bg-gray-200'>LATEST ARRIVALS</h1>
                <div className='flex items-center gap-2 bg-gray-200'>
                    <p className='font-semibold text-sm md:text-base bg-gray-200'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
        </div>

        {/* Hero Right Side */}
        <img className='w-full sm:w-1/2' src={assets.hero_img_2} alt="Hero IMG" />
    </div>
  )
}

export default Hero