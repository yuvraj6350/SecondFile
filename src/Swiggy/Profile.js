import React, { useState } from 'react'
import ProfileSwigy from './ProfileSwigy';
import LoginButton from './LoginButton';
import ProfileFav from './ProfileFav';
import ProfileOther from './ProfileOther';
function Profile() {
  const [button12, setButton12] = useState(true);
  const [button13, setButton13] = useState(false);
  const [button14, setButton14] = useState(false);
  const [activeComponent, setActiveComponent] = useState('ProfileOther');
  const [header11 ,setHeader11] = useState(true)
  const [contentBox ,setContentBox]=useState(true)
  
  
  function handleScroll ()  {
    if (window.scrollY > 0) {
      console.log("if")
      setHeader11(false);
      setContentBox(false)
    } else {
      console.log("else")
      setHeader11(true);
      setContentBox(true)
    }
  };
  window.addEventListener('scroll' , handleScroll)

  function handleLinkClick  (componentName)  {
  setActiveComponent(componentName);
  
};
function help(){
  setButton12(true);
  setButton13(false);
  setButton14(false);
}
function general(){
  setButton13(true);
  setButton12(false);
  setButton14(false);
}
function faq(){
  setButton14(true);
  setButton12(false);
  setButton13(false);
}

  return (
<div className={contentBox ? 'content-box' : "contentBox"}>
   <header className={header11 ? 'header1' : 'header11'} >

      <h1 style={{paddingLeft:"20%" ,paddingTop:"30px" ,color:"white" }}>User Name</h1>
      <p style={{paddingLeft:"20%",color:"white" ,marginTop:"0px" }}>Phone no   .   Email Id</p>
   </header>
      <div style={{marginLeft:"15%" ,marginRight:"15%" ,backgroundColor:"white" ,height:"80vh" ,padding:"50px 0px 50px 50px" ,display:"flex"  }}>

      <div style={{ width:"30%" ,height:'100%',backgroundColor:'#edf1f7' }}>
      <LoginButton className={button12 ? "button12" : "button6"}
      name="Order" onClick={() => {handleLinkClick('ProfileOther'); help()}}/>
      <LoginButton className={button13 ? "button13" : "button7"}  name="Swiggy one" onClick={() => {handleLinkClick('ProfileSwigy') ; general()}}></LoginButton>
      <LoginButton className={button14 ? "button14" : "button8"}   name="Favourites" onClick={() => {handleLinkClick('ProfileFav') ; faq()}}></LoginButton>
      </div>

      <div style={{ width:"70%" ,height:'100%'}}>
      {activeComponent === 'ProfileOther' ? <ProfileOther /> : activeComponent
        === 'ProfileSwigy' ? <ProfileSwigy />:activeComponent === 'ProfileFav' ? <ProfileFav /> : '' }
      </div>

  </div>

</div>
  )
}

export default Profile