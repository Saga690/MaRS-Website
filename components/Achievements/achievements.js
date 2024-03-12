import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { achievements } from '@/pages/api/data';
import SectionWrapper from '@/hoc/SectionWrapper';
import { textVariant } from '@/utils/motion';

const AchievementCard = ({ achievement }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={achievement.date}
    iconStyle={{ background: achievement.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={achievement.icon} alt={achievement.event_name} className='w-[60%] h-[60%] object-contain' />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{achievement.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{achievement.event_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {achievement.points.map((point, index) => (
        <li key={`achievement-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-[80px]'>Achievements</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Achievements, "achievements")