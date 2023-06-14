import React from 'react';

// Dropdown component
const Dropdown = ({ options  ,onChange}) => {
  console.log(options)
  return (
   <>
    <select  className="select" onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option className="option" key={option.label} value={option.label}>
          {option.label}
        </option>
        
      ))}
    </select>
   
    </>
  );
};
export default Dropdown