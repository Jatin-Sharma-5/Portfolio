import React from 'react'
import "./ProjectsSections.css"
import { Link } from 'react-router-dom'
import {delay, motion} from 'framer-motion'

function ProjectsSection() {
    const LandingAnimation = {
        initial: {y: 20, opacity: 0},
        animate: {y: 0, opacity: 1, transition: {duration:
            0.5}},
        exit: {y: 20, opacity: 0},
    } 
  return (
    <motion.div className='projects-section-wrapper'variants={LandingAnimation} initial="initial"animate="animate"exit="exit">
        <hr className='seaprator'/>
        <Link className='project-container'>
            <div className='project-timeline'>2023 - Now</div>
            <div className='flex justify-between' style={{width:'100%'}}>
                <div className='project-details'>
                    <div className='project-name'>Elite Tailors</div>
                    <div className='project-link'>elitetailors.in</div>
                </div>
                <div className='project-role'>UI/UX Designer</div>
            </div>
        </Link>
        <hr className='seaprator'/>
        <Link className='project-container'>
            <div className='project-timeline'>2022 - 2023</div>
            <div className='flex justify-between' style={{width:'100%'}}>
                <div className='project-details'>
                    <div className='project-name'>Take a Trip</div>
                    <div className='project-link'> <a href='https://elitetailors.in'>elitetailors.in</a></div>
                </div>
                <div className='project-role'>Full Stack Developer</div>
            </div>
        </Link>
        <hr className='seaprator'/>
        <Link className='project-container'>
            <div className='project-timeline'>2021 - 2022</div>
            <div className='flex justify-between' style={{width:'100%'}}>
                <div className='project-details'>
                    <div className='project-name'>Project Name</div>
                    <div className='project-link'><a href='www.google.com'>google</a></div>
                </div>
                <div className='project-role'>Role</div>
            </div>
        </Link>
        <hr className='seaprator'/>
    </motion.div>
  )
}

export default ProjectsSection
