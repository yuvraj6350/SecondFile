import React from "react";
import { redirect } from "react-router-dom";

const UserForm = ({ name,value  ,onInput ,type ,onChange}) => {
  return (
    <>

    <div className="app">
       {name} 
       <br></br>
       <br></br>
      <input value={value} name={name} onInput={onInput}  onChange={onChange} type={type} style={{border:'none' , 
      padding:'6px' , 
      backgroundColor:'lightblue' , 
      color:'black' ,
      fontSize:'12px',
      boxShadow: '0 0 10px red',
      borderRadius: '5px'
      }}/>
    </div>
    </>
  );
};

export default UserForm;
