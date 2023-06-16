import React, {useState } from "react";
import OrderInput from "./OrderInput";
import LoginButton from "./LoginButton";

function LoginInfo({setLoginInfo}) {
  const [phone, setPhone] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
 

  const validateName = () => {
    if (name.length == "") {
      setNameError("Enter name");
    } else {
      setNameError("");
    }
  };

  const validatePhone = () => {
    if (phone.length == "" ) {
      setPhoneError('Enter Phone no');
    } 
    else{
      setPhoneError('');
    }
  };
  const validateEmail = () => {
    if (email.length == "") {
      setEmailError("Enter email");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || phone === "" || email === "") {
      setNameError("* Required name");
      setPhoneError("* Required Phone No");
      setEmailError("* Required Correct Email");
    } else {
      setNameError("");
      setPhoneError("");
      setEmailError("");
    }

    setName("");
    setPhone("");
    setEmail("");
  };
  function handelLoginInfo(){
    setLoginInfo(false)
}



  return (
    <div>
      {" "}
      
      <div className="loginInfo">
        <div className="loginInfo1">
          <LoginButton name="&#10006;"   className="BackIcon" onClick={(e)=>handelLoginInfo(e) }/>
          <div style={{ display: "flex" }}>
            <div>
              <h2 style={{ padding: "0px 0px 0px 40px " }}>Sign up</h2>
              <p style={{ paddingLeft: "40px", fontSize: "13px" }}>
                or{" "}
                <span style={{ color: "#FC8018", fontSize: "13px" }}>
                  Login to your acount
                </span>
              </p>
              <h3 style={{ paddingLeft: "40px", marginTop: "0px" }}>____</h3>
            </div>
            <img
              style={{
                paddingTop: "10px",
                paddingLeft: "160px",
                width: "100px",
              }}
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              alt="food"
            />
          </div>
          <div style={{ paddingTop: "30px" }}>
            <form onSubmit={handleSubmit}>
              <OrderInput
                className="loginOrder"
                placeholder="Phone No"
                value={phone}
                onInput={validatePhone}
                
                onChange={(e) => setPhone(e.target.value ) }
              />
             <span className="error">{phoneError}</span> 
              <br></br>
              <OrderInput
                className="loginOrder"
                placeholder="Name"
                value={name}
                onInput={validateName}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="error">{nameError}</span>
              <br></br>
              <OrderInput
                className="loginOrder"
                placeholder="Email"
                value={email}
                onInput={validateEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
             <span className="error"> {emailError}</span>
              <h4
                style={{
                  color: "#5d8ed5",
                  paddingLeft: "40px",
                  paddingTop: "20px",
                }}
              >
                Have a referral code?
              </h4>
              <LoginButton name="CONTINUE" className="continue" />
            </form>
          </div>
          <p
            style={{
              fontSize: "12px",
              color: "#686b78",
              marginTop: "6px",
              fontWeight: "500",
              paddingLeft: "40px",
            }}
          >
            By creating an account , I accept the{" "}
            <span
              style={{
                fontSize: "12px",
                color: "black",
                marginTop: "6px",
                fontWeight: "500",
              }}
            >
              Terms & Condition and Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginInfo;
