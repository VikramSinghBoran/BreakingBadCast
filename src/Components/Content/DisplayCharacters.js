import React from 'react'
import './contentstyle.css';

function DisplayCharacters({item}) {
    // console.log(element);
  return (
    <div className="flip-card">
        {/* Copied from W3 Schools. Understanding needed. */}
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <img src={item.img}></img>
            </div>
        <div className="flip-card-back">
            <h1>{item.name}</h1>
            <p>Actor Name: {item.portrayed}</p> 
            <p>NickName: {item.nickname}</p> 
            <p>DOB: {item.birthday}</p>
            <p>Status: {item.status}</p>
        </div>
        </div>
    </div>
    
  )
}

export default DisplayCharacters