import React, { useState } from "react";

function State() {
  const [val, setVal] = useState("yuvraj");
  const change = () => {
    const name = val;
    if (name === "yuvraj") {
      setVal("Singh");
    } else {
      setVal("yuvraj");
    }
  };
  const bioData = [
    {
      id: 0,
      name: "yuvarj",
      age: 21,
    },{
        id: 1,
        name: "yuvarjsss",
        age: 21,
    },{
        id: 2,
        name: "yuvarjsssss",
        age: 21,
    }
  ];
  const [array, setArray] = useState(bioData);
  const clear = () => {
    setArray([]);
  };

  const [updateData ,setUpdateData]=useState({
      name:"rajput" , age: 30
  })
  const update = () => {
    setUpdateData({name:"shekhawat" , age: 21})
  };
  const removeData=(id)=>{
    const newarray = array.filter((e) => {
        return e.id !== id
    })
    setArray(newarray)
  }
  return (
    <>
      <h1>{val}</h1>
      <button onClick={change}>Click me</button>
      {array.map((e) => { 
        return (<h1 className="TextH" key={e.id}> my Name Is {e.name} age {e.age} 
        <button  className="inner" onClick={() =>removeData(e.id)}>Remove</button>
        </h1> 
         )
         }
         )
         }
      <button className="btn" onClick={clear}>
        clear
      </button>{" "}
      {"\n"}
      <h1 className="TextH">my name {updateData.name} age {updateData.age}</h1>
      <button className="btn" onClick={update}>
        Update
      </button>
    </>
  );
}

export default State;
