import React from 'react'
import { useState } from 'react'

const Counter = () => {
const [count, setCount] = useState(0)
  return (
   <>
   <button onClick={()=>setCount(count+1)}>+</button>
   <span>{count}</span>
   <button onClick={()=>setCount(count-1)}>-</button>
   </>
  )
}

export default Counter