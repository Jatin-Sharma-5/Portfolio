import React from 'react'
import Header from '../components/Header'
import "./Pages.css"
import LandingSection from '../components/LandingSection/LandingSection'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div className='h-screen bg-black page-wrapper' >
      <Header/>
      <LandingSection/>
      <ProjectsSection/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
  )
}

export default Home
