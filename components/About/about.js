import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { services } from '@/pages/api/data';
import { fadeIn, textVariant } from '@/utils/motion';
import SectionWrapper from '@/hoc/SectionWrapper';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full bg-gradient-to-r from-emerald-400 to-fuchsia-500 p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-30 h-30' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const about = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>About Us</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Models and Robotics Section a.k.a. MaRS is the backbone of robotics in IIT Roorkee. It aims at spreading the art of robot building in the institute and is open to all robotics enthusiasts and fanatics. We actively welcome industry-academia collaborations from interested organizations.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-12'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(about, "about")