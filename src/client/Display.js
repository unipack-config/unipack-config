import React from "react";
const beautinator = require("beautinator");

const style = {
  width: "50%",
  border: "1px solid black",
  height: "100vh"
};

export const Display = props => {
  const result = beautinator(props);

  const result2 = JSON.stringify(props, undefined, 4);
  console.log(typeof result);
  return <textarea style={style} value={result2} />;
};
