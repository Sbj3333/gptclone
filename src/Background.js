import React from 'react'
import video from './assets/chatbg.mp4'


const Backgroundvideo = () => {
  return (
    <div>
        <video className='video' src={video} autoPlay loop muted />
    </div>
  )
}

export default Backgroundvideo