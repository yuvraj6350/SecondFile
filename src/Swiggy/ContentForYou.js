import React, { useState, useEffect } from "react";
const contentList = ["Hungry ?", "Unexpected guest ?", "Game night ?", "Late night at office ?" , "Cooking gone wrong ?" ,"Movie Marathone ?"];

function ContentForYou() {
    const [counter, setCounter] = useState(0);
    const [content, setContent] = useState(contentList[counter]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) =>
          prevCounter === contentList.length - 1 ? 0 : prevCounter + 1
        );
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      setContent(contentList[counter]);
    }, [counter]);
  
    return (
        <>

    <h1 className="mymove">{content}</h1>
        </>
    )
}

export default ContentForYou;
