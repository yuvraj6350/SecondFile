import React from 'react'
import LoginButton from './LoginButton'


function Cart() {
 
  return (
    <>

    <div style={{display:"flex" ,alignItems:"center" ,justifyContent:"center", height:"80vh"}}>
    <div>

      <img style={{
        width: '241px',
        height: '256px',
    backgroundImage:' url(https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0)',
    backgroundSize:"cover"
   }} />
   <h2 style={{paddingLeft:"11%" ,fontSize:"20px" ,color:"#3d4152"}}>Your cart is empty</h2>
   <p style={{color: '#7e808c',fontSize:"15px"}}>You can go to home page to view more restaurants</p>
   <LoginButton name="SEE RESTURANT NEAR YOU" style={{
   padding: "0px 15px 0px 15px",
    cursor: 'pointer',
    textAlign: 'center',
    border: 'none',
    lineHeight: '40px',
    fontSize:' 14px',
    fontWeight: '600',
    color: '#fff',
    backgroundColor: '#fc8019',
     marginLeft:"1%"
   }}
   
   />
    </div>
    </div>
    </>
  )
}

export default Cart