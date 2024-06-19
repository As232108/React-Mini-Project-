import React, { useState } from 'react'

const Toggle = () => {
    const [isToggle, setIsToggle]=useState(false)

   const handleToggle=()=>{
    setIsToggle(!isToggle)

   }
  return (
    <div>
        <label>
    <input type='checkBox' onChange={handleToggle}></input>
    <p>{isToggle ? 'On':'Off'}</p>
    </label>
    </div>
  )
}

export default Toggle