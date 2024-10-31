import React from 'react'
import "./LandingSection.css"
import {motion} from 'framer-motion'

function LandingSection() {
    const LandingAnimation = {
        initial: {y: 20, opacity: 0},
        animate: {y: 0, opacity: 1, transition: {duration:
            0.5}},
        exit: {y: 20, opacity: 0}
    } 
  return (
    <div className='landing-section-wrapper'>
        <motion.div className='landing-section-headline' variants={LandingAnimation} initial="initial"animate="animate"exit="exit">I Create with Intention and Simplicty.</motion.div>
        <div className='landing-section-tag-wrapper'>
            <motion.div className='landing-section-tag'variants={LandingAnimation} initial="initial"animate="animate"exit="exit">Front End Developer</motion.div>
            <motion.div className='landing-section-tag'variants={LandingAnimation} initial="initial"animate="animate"exit="exit">UI/UX Designer</motion.div>
        </div>
    </div>
  )
}

export default LandingSection