import React, { useState  } from "react";
import Dropdown from "../component/Dropdown";


const Apps = () => {
  const [option, setOption] = useState("");
  const [choice, setChoice] = useState("");
  

  const dropdown1Options = [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' },
    { label: 'Option 4' },
    { label: 'Option 5' },
    { label: 'Option 6' },
    { label: 'Option 7' },
  ];

  const dropdown2Options = [
    { label: 'Choice A' },
    { label: 'Choice B' },
    { label: 'Choice C' },
    { label: 'Choice D' },
    { label: 'Choice E' },
    { label: 'Choice F' },
    { label: 'Choice G' },
  ];

  const optionData = (selectedOption) => {
    setOption(selectedOption);
  };

  const choiceData = (selectedChoice) => {
    setChoice(selectedChoice);
  };
 



  return (
      <div>
       <h1>Dropdown</h1>
      <Dropdown options={dropdown1Options} onChange={optionData} />
      <Dropdown  options={dropdown2Options} onChange={choiceData} />
      <div>Selected Option: {option}</div>
      <div>Selected Choice: {choice}</div>
    </div>
  );
};

export default Apps;
