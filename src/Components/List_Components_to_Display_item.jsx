import React from 'react'

const List_Components_to_Display_item = () => {

const items=['item1','item2','item3','item4','item5']

  return (
    <ul>
        {items.map((item,index)=>{
          return  <li key={index}>{item}</li>
        }
    )}
    </ul>
  )
}

export default List_Components_to_Display_item