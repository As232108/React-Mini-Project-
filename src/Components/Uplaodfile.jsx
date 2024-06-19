import React, { useState } from 'react'

const Uplaodfile = () => {
    const [file , setfile]= useState(null)

    const handlefilechnage=(e) =>{
        const selectedFile=e.target.file[0]
        setfile(selectedFile)
    }
  return (
    <div>
        <input type='file' accept='image*/' onChange={handlefilechnage}></input>
        {file && <img src={URLcreateObjectURL(file)}alt='Not Upload'/>}
    </div>
  )
}

export default Uplaodfile