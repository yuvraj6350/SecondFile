import React from 'react'

function ProfileSwigy() {
  return (
    <div>
    <div style={{fontSize:"22px" ,fontWeight:'900' ,padding:"5% 0% 0% 3%", color: "#282C3F"}}>Swiggy One</div>
    <div style={{display:"flex"}}>
  <div style={{width:"65%"}}>

    <p style={{margin: '20px 0',
    fontSize: '15px',
    lineHeight: '42px',
    color: '#686b78',
    position:' relative',
    zIndex: '1',
    paddingLeft:"3%",
    height:"10px"
    }}>
    Get free delivery and extra discounts all across Swiggy.
    <br></br>
    Your Swiggy One benefits can be availed only on the Swiggy App.
    </p>
    <img  style={{marginTop:"100px" ,paddingLeft:"3%"}} alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"></img>
    <img alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"></img>
  </div>
    <img weight="360px" height="350" alt="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_720,h_660/swiggy_one/my_account_super"></img>
    </div>
    </div>
  )
}

export default ProfileSwigy