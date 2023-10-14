import React from 'react'
import Send from './assets/send.png'
const Input = () => {
  return (
    <div className='input'>
      <input placeholder='Send a Message' className='messageinput' />
      <button>
        <img src={Send} className='send'/>
      </button>
    </div>
  )
}

export default Input