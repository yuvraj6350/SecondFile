import React, { useState ,useEffect} from 'react'
import Faq from './Faq';
import GeneralIssue from './GeneralIssue';
import HelpOther from './HelpOther'
import LoginButton from './LoginButton';

function Help() {
  const [button9, setButton9] = useState(true);
  const [button10, setButton10] = useState(false);
  const [button11, setButton11] = useState(false);
  const [activeComponent, setActiveComponent] = useState('HelpOther');
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
    window.addEventListener('scroll', handleScroll);

   

  function handleLinkClick  (componentName)  {
  setActiveComponent(componentName);
  
};
function help(){
  setButton9(true);
  setButton10(false);
  setButton11(false);
}
function general(){
  setButton10(true);
  setButton9(false);
  setButton11(false);
}
function faq(){
  setButton11(true);
  setButton9(false);
  setButton10(false);
}

  return (
   
     <div className={contentBox ? 'content-box' : "contentBox"}>
    <header className={header11 ? 'header1' : 'header11'} >
      <h1 style={{paddingLeft:"20%" ,paddingTop:"30px" ,color:"white" }}>Help & Support</h1>
      <p style={{paddingLeft:"20%",color:"white" ,marginTop:"0px" }}>Let's take a step ahead  and help you better</p>
    </header>
      <div style={{marginLeft:"15%" ,marginRight:"15%" ,backgroundColor:"white" ,height:"80vh" ,padding:"50px" ,display:"flex"}}>

      <div style={{ width:"30%" ,height:'100%' ,backgroundColor:'#edf1f7'}}>
      <LoginButton className={button9 ? "button9" : "button6"}
      name="Help with others" onClick={() => {handleLinkClick('HelpOther'); help()}}/>
      <LoginButton className={button10 ? "button10" : "button7"}  name="General Issues" onClick={() => {handleLinkClick('GeneralIssue') ; general()}}></LoginButton>
      <LoginButton className={button11 ? "button11" : "button8"}   name="FAQ's" onClick={() => {handleLinkClick('Faq') ; faq()}}></LoginButton>
      </div>

       <div style={{ width:"70%" ,height:'100%'}}>
       {activeComponent === 'HelpOther' ? <HelpOther /> : activeComponent
        === 'GeneralIssue' ? <GeneralIssue />:activeComponent === 'Faq' ? <Faq /> : '' }
       </div>

      </div>
   </div>

  )
}

export default Help