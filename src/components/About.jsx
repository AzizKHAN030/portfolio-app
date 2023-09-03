import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import ServiceCard from './ServiceCard'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview. </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My name is Azizbek Rasulov, I'm 23, have been working in web development sphere from 2021. I really like to explore new things for me in tech world so I constantly learn and expose my potential. I'm interested both in Frontend and Backend, also I started React Native development recently and I found it super interesting. I'm eager to work in companies where I could learn more from other colleagues.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <>
          <ServiceCard
           key={service.title}
           service={service}
           index={index}/>
          </>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")