import React from 'react'
import Background from "./Background.jsx";

const Hero = () => {
  return (
    <div className='heroDiv'>
        <img src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" id='hero'/>
        <div className='overlay' />  
        <div className='screen'>
          <div>
            <Background />
          </div>
        </div>
        
    </div>
    
  )
}

export default Hero