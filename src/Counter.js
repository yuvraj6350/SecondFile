import React, { useContext, useState } from "react";
import DataList from "./DataList";
import SubmitButton from "./SubmitButton";
import UserForm from "./UserForm";
import { personDetail } from "./Text";
import Ref from "./Ref";

function Counter() {
  const { fname, age ,address ,last} = useContext(personDetail);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState('');
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const validateName = () => {
    if (name.length < 3) {
      setNameError("Name must be at least 3 characters long");
    } else {
      setNameError("");
    }
  };

  const validatePhone = () => {
    if (phone === "") {
      setPhoneError("Phone is required");
    } else if (phone.length !== 10) {
      setPhoneError("Phone number must be 10 digits");
    } else {
      setPhoneError("");
    }
  };

  const validateEmail = () => {
    if (email === "") {
      setEmailError("Email is required");
    } 
    // else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    //   setEmailError("Please enter a valid email address");
    // }
     else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || phone === "" || email === "") {
      setError("Invalid form submission");
      setNameError("* Required name");
      setPhoneError("* Required Phone No");
      setEmailError("* Required Correct Email");
    } else {
      setError("Your form is submitted");
      setNameError("");
      setPhoneError("");
      setEmailError("");
      const data = {
        name: name,
        phone: phone,
        email: email,
      };
      setSubmittedData([...submittedData, data]);
      fetch("http://localhost:4001/Detail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <>
      <h1>User Registration Form</h1>
      <h1 className="data">{error}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <UserForm
            type="text"
            name="name"
            id="name"
            value={name}
            onInput={validateName}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <span className="error">{nameError}</span>}
        </div>

        <div>
          <UserForm
            type="number"
            name="phone"
            id="phone"
            value={phone}
            onInput={validatePhone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {phoneError && <span className="error">{phoneError}</span>}
        </div>

        <div>
          <UserForm
            type="text"
            name="email"
            id="email"
            value={email}
            onInput={validateEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <span className="error">{emailError}</span>}
        </div>
        <SubmitButton name="submit" />
      </form>
      <div>
        <h2>Submitted Data:</h2>
        {submittedData.map((data, index) => (
          <DataList key={index} data={data} />
        ))}
      </div>
<h1>i am {fname} age{age}</h1>
<h1>address :  {address}</h1>
<input  placeholder={last}></input><br></br>
<h1>usRef</h1>
<Ref />
    </>
  );
}

export default Counter;
