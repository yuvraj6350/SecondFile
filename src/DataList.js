import React from "react";

function DataList({ data }) {
  return (
    <div>
      <h1 >List:</h1>
      <p className="list">Name: {data.name}</p>
      <p className="list">Phone: {data.phone}</p>
      <p className="list">Email: {data.email}</p>
    </div>
  );
}

export default DataList;
