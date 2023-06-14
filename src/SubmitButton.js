import React from 'react'

function SubmitButton({ name}) {
  return (
    <button  style={{border:'none' , 
    padding:'6px' , 
    backgroundColor:'red' , 
    color:'black' ,
    fontSize:'12px',
    boxShadow: '0 0 10px red',
    borderRadius: '5px',
    margin: "1%"
    }}
    
    
    >{name}</button>
  )
}

export default SubmitButton