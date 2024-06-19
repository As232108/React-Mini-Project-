import React, { useState } from 'react'

const Pagination = (items,itemsPerPage) => {

const [currantPage , setCurrentPage]=useState('1')

const indexOfLastItem=currantPage*itemsPerPage
const indexOfFirstItem=indexOfLastItem-itemsPerPage
const currentItem=items.slice

  return (
    <div></div>
  )
}

export default Pagination