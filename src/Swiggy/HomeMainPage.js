import React, { useState } from "react";
import LoginButton from "./LoginButton";
import OrderInput from "./OrderInput";
import LoginInfo from "./LoginInfo";
import ContentForYou from "./ContentForYou";
import CreateAccount from "./CreateAccount";

function HomeMainPage() {
  const [loginInfo, setLoginInfo] = useState(false);
  const [Account, setAccount] = useState(false);
  const [location, setLocation] = useState("");
  const [inputValue, setInputValue] = useState("");

  function handelInput(e) {
    if (inputValue.length == 0) {
      console.log("if");
      setLocation("Enter Your Delivery Location");
    } else {
      console.log("else");

      setLocation("");
    }
    setInputValue(e.target.value);
  }
  function findFood(e) {
    e.preventDefault();
    const local = e.target.value;
    console.log(local);
    if (inputValue.length == 0) {
      console.log("if");
      setLocation("Enter Your Delivery Location");
    } else {
      console.log("else");

      setLocation("");
    }
  }
  function handleSignUp(){
    setLoginInfo(true)
    localStorage.removeItem('phoneno')
  }

  return (
    <div className="main">
      {Account ? (
        <CreateAccount setAccount={setAccount} setLoginInfo={setLoginInfo} />
      ) : (
        ""
      )}
      {loginInfo ? (
        <LoginInfo setLoginInfo={setLoginInfo} loginInfo={loginInfo} />
      ) : (
        ""
      )}
      <div className="mainButton">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"></img>
        <LoginButton
          className="button1"
          name="Login"
          onClick={() => setAccount(true)}
        />
        <LoginButton
          className="button"
          name="sign Up"
          onClick={(e) => handleSignUp(e)}
        />
      </div>
      <ContentForYou />
      <p className="order">Order food from favourite resturant neer you</p>
      <div>
        <form onSubmit={(e) => findFood(e)}>
          <LoginButton className="locationButton" name="Locate me" />
          <OrderInput
            className="input"
            onInput={(e) => handelInput(e)}
            placeholder="Enter Your Delivery Location"
          />
          <LoginButton className="button2" name="FIND FOOD" />
        </form>
        {location && <p className="location">{location}</p>}
      </div>
      <p
        style={{
          color: "#a9abb2",
          fontSize: "15px",
          fontWeight: "400",
          letterSpacing: ".2px",
        }}
      >
        POPULAR CITIES IN INDIA
      </p>
      <p>Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai</p>
      <p> Pune& more.</p>
    </div>
  );
}

export default HomeMainPage;
