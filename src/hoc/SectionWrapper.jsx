import { motion } from "framer-motion"
import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"

const SectionWrapper = (Component, idName) => function HOC(){
    return (
        <motion.section
            variants={staggerContainer()}
            initial = "hidden"
            whileInView="show"
            viewPort={{threshold: 0.1}}
        >
            <Component/>
        </motion.section>

    )
}

export default SectionWrapper