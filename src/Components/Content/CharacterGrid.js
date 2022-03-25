import React from 'react'
import LoadingStatus from '../LoadingStatus/LoadingStatus'
import DisplayCharacters from './DisplayCharacters'
import './contentstyle.css'

const CharacterGrid = ({characters,status}) => {
  
//   console.log(characters);
  return (
            status  
            ? 
            ( <LoadingStatus></LoadingStatus> )
            :
            (
                <div className='charGrid'>
                    {characters.map((element)=>(
                        <DisplayCharacters key={element.char_id} item={element}></DisplayCharacters>
                    ))}
                </div>
            )
  )
}

export default CharacterGrid