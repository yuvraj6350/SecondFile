import React from "react";
import { Link } from "react-router-dom";


function AboutUser() {
    
  return (
    <div style={{display:"flex" }}>
    <header>
         <img
          src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA"
          width="64"
          height="69"
          style={{
            paddingLeft: "17%",
            paddingTop: "12px",
            
          }} />
       

            <Link className="link1" to="/profile">Home</Link>
            <Link  className="link2" to="/help">Blogs</Link>
            <Link className="link3" to="/cart">Contact</Link>
      
    </header>
    </div>
  );
}
export default AboutUser;
