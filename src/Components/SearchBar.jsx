import React, { useState } from 'react'

const SearchBar = ({items}) => {
    const [searchTerm, setsearchTerm]=useState('')

    const filterItems=items.filter((item)=>
    item.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    )
    
    return (
        <div>
            <input type='text' placeholder='search' onChange={(e)=>setsearchTerm(e.target.value)}></input>
            <ul>
                {filterItems.map((item,index)=>(
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>

        </div>
  )
}

export default SearchBar