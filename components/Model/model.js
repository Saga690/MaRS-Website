import React from 'react';
import { styles } from '@/utils/styles';
import DroneCanvas from '../Canvas/Drone';

const model = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} my-6 flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 white bg-gradient-to-b from-violet-500' />
        </div>
        <div>
          <h1 className={`font-black text-white lg:text-[72px] sm:text-[54px] xs:text-[45px] text-[36px] lg:leading-[98px] mt-2`}>Models and Robotics Section <span className='text-[#915eff]'>(MaRS)</span></h1>
          <p className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}>Promoting the art of robotics in IIT Roorkee</p>
        </div>
      </div>
      <DroneCanvas />
    </section>
  )
}

export default model