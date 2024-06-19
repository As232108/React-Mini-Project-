import { useState } from 'react'
import './App.css'
import Pagination from './Components/Pagination'

const items=['Aman','adrash','DJ','Gaurav','Ram']
function App() {


  return (
    <>
<Pagination itema={items} itemsPerPage={2}/>
    </>
  )
}

export default App
