import React from 'react'
import Tilttext from '../components/Tilttext'
import Header from '../components/Header'

const Home = () => {
    const mouseMoving =(e) =>{
        console.log('mouse is moving')

    }
  return (
    <div onMouseMove={(e)=>{mouseMoving(e)}} className='h-screen bg-black' >
      <Header/>
        <Tilttext/>
      
    </div>
  )
}

export default Home
