import React from 'react'
import  Tilty  from 'react-tilty'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const ServiceCard = ({service:{title, icon}, index}) => {
  return (
    <Tilty
        className = "xs:w-[250px] w-full transition:all"
        reverse = {true}
        max={45}
        speed={450}
        scale={1.1}
    >
        <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly flex-col items-center"
            >
                <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
            </div>
        </motion.div>
    </Tilty>
  )
}

export default ServiceCard