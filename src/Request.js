import React from 'react'
import User from './assets/user.png'

const Request = () => {
  return (
    <div className='requestcontainer'>
        <img src={User} className='profilephoto'/>
        <p className='requestmessage'>
            In React, an "input component" typically refers to a component that is used to capture user input, such as text, numbers, or other data. It's a fundamental part of building forms and interactive user interfaces. An input component can take many forms, but one of the most common is the  element in HTML.
            Hello
        </p>
    </div>
  )
}

export default Request