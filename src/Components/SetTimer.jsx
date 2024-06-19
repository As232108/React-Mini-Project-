import React, { useState } from 'react'
import { useEffect } from 'react'

const SetTimer = () => {
    const [time, setTime]=useState(60)

    useEffect(()=>{
        if(time>0){
            const timer=setTimeout(()=>setTime(time-1),1000)
        //     return ()=>clearTimeout(timer)
         }
    },[time])
  return (
    <div>
        leftTime:{time} second
    </div>
  )
}

export default SetTimer