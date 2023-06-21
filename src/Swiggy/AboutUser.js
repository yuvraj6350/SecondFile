import React, { useState } from 'react';
import Help from './Help';
import Profile from './Profile';
import Cart from './Cart';

const AboutUser = () => {

const [activeComponent, setActiveComponent] = useState('Help');

function handleLinkClick  (componentName)  {
setActiveComponent(componentName);

};

return (
<div> 

<div className='header'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtoCCzL8g4RXSiVc1Dn8_L1gqE_LF4YUUEx622YDV&s"  height=" 50px"
  style={{
   paddingLeft:"20%",
   paddingTop:'15px',
   paddingBottom:"20px"
  }}/>  <span style={{color:"#3d4152" ,paddingTop:"1.8%" ,fontSize: "14px", fontWeight: '700',letterSpacing: ".53px"}} >{activeComponent === 'Help' ? 'Help' : ''}</span>
        <span style={{color:"#3d4152" ,paddingTop:"1.8%" ,fontSize: "14px", fontWeight: '700',letterSpacing: ".53px"}} >{activeComponent === 'Profile' ? 'MY ACCOUNT' : ''}</span>
        <span style={{color:"#3d4152" ,paddingTop:"1.8%" ,fontSize: "14px", fontWeight: '700',letterSpacing: ".53px"}} >{activeComponent === 'Cart' ? 'SECURE CHECKOUT' : ''}</span>

 
<button className="button3" onClick={() => handleLinkClick('Help')}>Help</button>
<button  className="button4" onClick={() => handleLinkClick('Profile')}>Profile</button>
<button className="button5" onClick={() => handleLinkClick('Cart')}>Cart</button>
</div>

<div style={{paddingTop:"50px"}}>

{activeComponent === 'Help' ? <Help /> : activeComponent
=== 'Profile' ? <Profile /> : activeComponent === 'Cart'?
<Cart /> : '' }
</div>
</div>
);
};

export default AboutUser;