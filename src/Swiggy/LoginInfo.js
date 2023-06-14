import React, { useState } from 'react'
import OrderInput from './OrderInput'
import LoginButton from './LoginButton'

function LoginInfo({setLoginInfo}) {
 
  
    function handelButton(){
        setLoginInfo(false)
    }
  
  return (
    <div> 

        <div className='loginInfo' >
        <div className='loginInfo1'>
        <LoginButton name="&#10006;" onClick={(e) =>handelButton(e) }/>
        <div style={{display:"flex"}}>
        <div>
        <h2 style={{padding: "0px 0px 0px 40px "}} >Sign up</h2>
        <p style={{paddingLeft:"40px",fontSize:"13px"}}>or <span style={{color:"#FC8018" ,fontSize:"13px"}}>Login to your acount</span>
        </p>
        <h3 style={{paddingLeft:"40px" ,marginTop:"0px"}}>____</h3>
        </div>
          <img style={{paddingTop:"10px", paddingLeft:"160px" ,width:"100px"}} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"/>
        </div>
        <div style={{paddingTop:"30px"}}>
        <OrderInput  className='loginOrder' placeholder="Phone No"/><br></br>
        <OrderInput  className='loginOrder' placeholder="Name"/><br></br>
        <OrderInput  className='loginOrder' placeholder="Email"/>
        <h4  style={{color:"#5d8ed5", paddingLeft:"40px" ,paddingTop:"20px"}}>Have a referral code?</h4>
        <LoginButton name="CONTINUE" className="continue"/>
        </div>
        <p style={{fontSize: "12px",color: "#686b78", marginTop: "6px", fontWeight: "500" ,paddingLeft:"40px"}}>By creating an account , I accept the <span style={{fontSize: "12px",color:"black" ,marginTop: "6px", fontWeight: "500" }}>Terms & Condition and Privacy Policy</span></p>
         </div>
         </div>
       
    </div>
  )
}

export default LoginInfo