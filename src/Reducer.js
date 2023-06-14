import React, { useReducer } from 'react';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { value: action.payload };
    case 'RESET':
      return { value: '' };
    default:
      return state;
  }
};

function Reducer() {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, { value: '' });

  // Event handler for input change
  const handleChange = (e) => {
    dispatch({ type: 'CHANGE', payload: e.target.value });
  };

  // Event handler for reset button
  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <input type="text" value={state.value} onChange={handleChange} />
      <button onClick={handleReset}>Reset</button>
      <p>Current value: {state.value}</p>
    </div>
  );
}

export default Reducer;
