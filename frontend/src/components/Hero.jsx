import React from 'react'
import { assets } from '../assets/assets'

function Hero() {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400 mt-10'>
            
            {/* Hero Left Side */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-14 sm:py-0'>
                <div className='text-[#414141]'>
                    
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base tracking-widest'>
                            OUR BESTSELLERS
                        </p>
                    </div>

                    <h1 className='prata-regular text-4xl sm:py-3 lg:text-5xl leading-relaxed text-gray-900'>
                        Latest Arrivals
                    </h1>

                    <div className='flex items-center gap-2 group cursor-pointer mt-2'>
                        <p className='font-semibold text-sm md:text-base group-hover:text-black transition-colors'>
                            SHOP NOW
                        </p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141] group-hover:w-14 transition-all duration-300'></p>
                    </div>

                </div>
            </div>

            {/* Hero Right Side */}
            <img
                className='w-full sm:w-1/2 object-cover'
                src={assets.hero_img}
                alt="Latest Arrivals"
            />

        </div>
    )
}

export default Hero