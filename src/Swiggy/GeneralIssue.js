import React, { useState } from 'react'

function GeneralIssue() {
   const [issue1 , setIssue1] =useState(false)
   const [arrow1 ,setArrow1]  =useState(false)
  function handelArrow(){
    if(!issue1){

      setIssue1(true)
      setArrow1(true)
    }else{
      setIssue1(false)
      setArrow1(false)
    }
  }


  return (
      <div>
      <div style={{fontSize:"24px" ,fontWeight:'600' ,padding:"5% 0% 0% 5%", color: "#282C3F"}}>General issues</div>
     <div style={{paddingLeft:"5%"}}>
      <div style={{borderBottom:"1px solid #d4d5d9"}}>
       <button className='button15' onClick={() => handelArrow()}>
         <span className={arrow1 ? "arrow1" : "arrow"}>&#8964;</span>
         <span className='custumer'>What is swiggy custumer care number ?</span>
         <div className={issue1 ? "issue1" : "issue"}>We value our customer’s time and hence moved away from a single customer care number to 
         a comprehensive chat-based support system for quick and easy resolution. You no longer have to
          go through the maze of an IVRS call support. Just search for your issue in the help section on
           this page and initiate a chat with us. A customer care executive will be assigned to you shortly. </div>
       </button>
      </div>
     </div>
      </div>


   
  )
}

export default GeneralIssue