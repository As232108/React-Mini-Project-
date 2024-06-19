import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [input, setinput]=useState('')
    const [todo, settodo]=useState([])

    const addTodo=()=>{
        if(input.trim()!==''){
            settodo([...todo,input])
            setinput('')
        }
    }
  return (
    <div>
        <input type='text' onChange={(e)=>setinput(e.target.value)}></input>
        <button onClick={addTodo}>Add</button>
        <ul>
            {todo.map((todos,index)=>{
                <li key={index}>{todos} <button>remove</button>
                </li>
            })}
           
        </ul>
    </div>
  )
}

export default Todo