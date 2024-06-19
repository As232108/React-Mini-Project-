import React from 'react'
import { useState } from 'react'

const TakeInputAndDisplay = () => {
const [input, setInput] = useState('')
  return (
    <div>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <p>UserInput:{input}</p>
    </div>
  )
}

export default TakeInputAndDisplay