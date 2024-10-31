import React from 'react'
import Tilttext from '../components/Tilttext'
import Header from '../components/Header'
import "./Pages.css"
import LandingSection from '../components/LandingSection/LandingSection'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'

const Home = () => {
  return (
    <div className='h-screen bg-black page-wrapper' >
      <Header/>
      <LandingSection/>
      
    </div>
  )
}

export default Home
