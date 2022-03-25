import React, { useState } from 'react'
import '../Search/Search.css'

const Search = ({getQuery}) => {
  const [text,setText] = useState("");
  
  const onTextChange = (t) =>{
    setText(t);
    getQuery(t);
  }

  return (
    <div className='inputDiv'>
      <input type='text' placeholder='Search Characters' autoFocus value={text} onChange={(e)=>onTextChange(e.target.value)}></input>



    </div>
  )
}

export default Search