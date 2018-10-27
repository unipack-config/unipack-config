import React from "react";
const beautinator = require("beautinator");

const style = {
  width: "70%",
  height: "100vh"
};

const textAreaStyle = {
  width: "100%",
  height: "100vh", 
  background: '#333647',
  color: '#FEFF00',
  fonFamily: 'Roboto Mono',
  fontSize: '25px',
  border: 'none',
  boxShadow: 'none',
  outline: 'none',
  padding: '25px'
};

export const Display = props => {
  const result = beautinator(props);

  const result2 = JSON.stringify(props, undefined, 4);
  return (
    <div style={style} >
      <textarea style={textAreaStyle} 
      value={`const path = require("path");
      module.exports = ${result2}`} />
    </div>
  )
};
