import React, { useEffect, useState } from 'react';
import OrderInput from './OrderInput';
import LoginButton from './LoginButton';

function CreateAccount({ setAccount, setLoginInfo }) {
  const [phoneno, setPhoneno] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState('');
  const [log, setLog] = useState('');
  const[login , setLogin] = useState('')

  const handleAccount = () => {
    setAccount(false);
  };

  const validatePhone = () => {
  

    if (phoneno.length == "" ) {
      setPhoneError('Enter Phone no');
    } 
      
    else{
      setPhoneError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneno.trim() === '') {
      setPhoneError('* Required Phone No');
    } else {
      const expectedOTP = '12345';
      setPhoneError('');
      setShowOTP(true);
      if (otp === '') {
        setLog(' *Enter OTP');
      } else if (otp !== expectedOTP) {
        setLog('*Invalid OTP');
      } else {
        setLogin('>  Login Successfully');
        setLog('');
        setOTP('')
        setPhoneno('')
        setTimeout(() => {
          setAccount(false); // Close the window after 2 seconds
        }, 1000);
      }
    }
   
     
  };

  return (
    <div>
      <div className="loginInfo">
        <div className="loginInfo1">
          <LoginButton name="&#10006;" onClick={handleAccount} />
          <div style={{ display: 'flex' }}>
            <div>
              <h2 style={{ padding: '0px 0px 0px 40px' }}>Login</h2>
              <p style={{ paddingLeft: '40px', fontSize: '13px' }}>
                or{' '}
                <span style={{ color: '#FC8018', fontSize: '13px' }}>
                  Create an account
                </span>
              </p>
              <h3 style={{ paddingLeft: '40px', marginTop: '0px' }}>____</h3>
            </div>
            <img
              style={{
                paddingTop: '10px',
                paddingLeft: '160px',
                width: '100px',
              }}
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              alt="Login"
            />
          </div>
          <div style={{ paddingTop: '30px' }}>
            <form onSubmit={handleSubmit}>
              <span
                style={{
                  left: '0',
                  position: 'absolute',
                  zIndex: '1',
                  backgroundColor: 'white',
                  marginLeft: '4%',
                  marginTop: '1.5%',
                }}
              >
                {phoneError}
              </span>
              <OrderInput
                type="text"
                className="loginOrder"
                placeholder="Phone No"
                value={phoneno}
                maxLength='10'
                pattern="[7-9]{1}[0-9]{9}" 
                onInput={validatePhone}
                onChange={(e) => setPhoneno(e.target.value)}
              />
              <br />
              <br />
              <span style={{position:"absolute",paddingLeft:'3%' ,color:"red"}}>{log}</span>
              <br></br>
              {showOTP && (
                <>
                  <OrderInput
                    className="loginOrder"
                    placeholder="OTP"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                  />
                  <br />
                  <br />
                </>
              )}
              <LoginButton type="submit" name="LOGIN" className="continue" />
            </form>
          </div>

          <p style={{ fontSize: '12px', color: '#686b78', marginTop: '6px', fontWeight: '500', paddingLeft: '40px' }}>
            By clicking on login, I accept the{' '}
            <span style={{ fontSize: '12px', color: 'black', marginTop: '6px', fontWeight: '500' }}>
              Terms & Condition and Privacy
              <br />
              <br />
              Policy
            </span>
          </p>
        
            <h1 style={{paddingLeft:"3%",fontSize:"45px" ,color:"lightgreen"}}>{login}</h1>
        </div>
      </div>
    
    </div>
  );
}

export default CreateAccount;
