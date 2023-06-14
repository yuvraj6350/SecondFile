import React, { createContext } from 'react';
import Counter from './Counter';
import Reducer from './Reducer';

const personDetail = createContext();

function Text(props) {
  const fname = "yuvraj";
  const age = 21;
  const address = "231 Karni Vihar";
  const last ="shekhawat"

  return (
    <>
      <personDetail.Provider value={{ fname: fname, age: age ,address: address , last: last}}>
       <Counter />
       <Reducer/>
      </personDetail.Provider>
    </>
  );
}

export default Text;
export { personDetail };
