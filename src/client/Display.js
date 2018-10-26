import React from "react";
const beautinator = require("beautinator");

const style = {
  width: "50%",
  border: "1px solid black",
  height: "100vh"
};

const textAreaStyle = {
  width: "100%",
  height: "100vh"
};

export const Display = props => {
  const result = beautinator(props);

  const result2 = JSON.stringify(props, undefined, 4);
  return (
    <div style={style} >
      <textarea style={textAreaStyle} 
      value={`const path = require("path");
      
module.exports = ${result2}`} />;
    </div>
  )
};
