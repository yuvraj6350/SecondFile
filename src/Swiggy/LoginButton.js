import React from 'react'
 
function LoginButton({name ,className ,style ,onClick}) {
  // console.log("onClick",onClick)
  return (
    
     <button className={className} style={style} onClick={onClick}>{name}</button>
  
  )
}

export default LoginButton