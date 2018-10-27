import React from "react";
const beautinator = require("beautinator");

const style = {
  width: "70%",
  height: "100vh"
};

const textAreaStyle = {
  width: "100%",
  height: "100vh",
  background: "#333647",
  color: "#FEFF00",
  fonFamily: "Roboto Mono",
  fontSize: "25px",
  border: "none",
  boxShadow: "none",
  outline: "none",
  padding: "25px"
};

export const Display = props => {
  const result = beautinator(props);
  let pluginsArr = props.plugins.map(el => (
    <div
      style={{
        color: "#FEFF00",
        fonFamily: "Roboto Mono"
      }}
    >
      {el}
    </div>
  ));
  const result2 = JSON.stringify(props, undefined, 4);
  return (
    <div style={style}>
      <p
        style={{
          color: "#FEFF00",
          fonFamily: "Roboto Mono"
        }}
      >
        const path = require("path");
      </p>
      {pluginsArr}

      <textarea
        style={textAreaStyle}
        value={`

module.exports = ${result2}`}
      />
    </div>
  );
};
