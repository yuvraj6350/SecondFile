import React, { useRef ,useEffect, useState} from 'react'


function Ref() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef("");
  
    useEffect(() => {
      count.current = inputValue;
    },[inputValue]);
  return (
    <>
        <input type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <p> current Value : {inputValue}</p>
        <p> previous Value : {count.current}</p>
    </>
  )
}

export default Ref