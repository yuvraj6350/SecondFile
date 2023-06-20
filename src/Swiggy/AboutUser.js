import React, { useState } from 'react';
import Help from './Help';
import Profile from './Profile';
import Cart from './Cart';

const AboutUser = () => {

const [activeComponent, setActiveComponent] = useState('Help');

const handleLinkClick = (componentName) => {

setActiveComponent(componentName);

};

return (
<div>
<header style={{boxShadow:" 0 0 20px grey" ,display:"flex" }}>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtoCCzL8g4RXSiVc1Dn8_L1gqE_LF4YUUEx622YDV&s"  height=" 50px"
  style={{
   paddingLeft:"20%",
   paddingTop:'15px',
   paddingBottom:"20px"
  }}/>
 
<button className="button3" onClick={() => handleLinkClick('Help')}>Help</button>
<button  className="button4" onClick={() => handleLinkClick('Profile')}>Profile</button>
<button className="button5" onClick={() => handleLinkClick('Cart')}>Cart</button>
</header>
{activeComponent === 'Help' ? <Help /> : activeComponent
=== 'Profile' ? <Profile /> : activeComponent === 'Cart'?
<Cart /> : '' }
</div>
);
};

export default AboutUser;