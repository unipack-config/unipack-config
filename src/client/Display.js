import React from "react";
const beautinator = require("beautinator");
import { Icon } from "semantic-ui-react";

const style = {
  width: "50%",
  border: "1px solid black",
  height: "100vh"
};

const textAreaStyle = {
  background: "#2d2d2d",
  width: "100%",
  height: "100vh",
  color: "white",
  fontFamily: "Monaco",
  border: "1px solid black"
};

export const Display = props => {
  const result = beautinator(props);

  const result2 = JSON.stringify(props, undefined, 4);
  return (
    <div style={style}>
      <textarea
        style={textAreaStyle}
        value={`const path = require("path");
      
module.exports = ${result2};`}
      />
      <Icon name="copy outline" size="large" style={{ cursor: "copy" }} />
    </div>
  );
};
