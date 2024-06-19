import React, { useState } from 'react'

const Bg_changer = () => {

    const [backgroundColor,setBackgroundcolor]=useState('white')

    const handleClick= () => {
        
    }
  return (
    <div onClick={handleClick} 
    style={{
        backgroundColor:'white',
        width:'200px',
        height:'200px',
        cursor:'pointer'
        }}>
        click me to change color 
    </div>
  )
}

export default Bg_changer