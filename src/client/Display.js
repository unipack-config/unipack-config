import React from "react";
const beautinator = require("beautinator");

const style = {
  width: "calc(100vw - 300px)",
  height: "100vh",
  position: "relative",
  backgroundColor:"#f3f3f3",
};

const textAreaStyle = {
  width: "700px",
  height: "600px", 
  background: '#f3f3f3',
  color: '#333',
  fonFamily: 'Roboto Mono',
  fontSize: '25px',
  border: 'none',
  boxShadow: 'none',
  outline: 'none',
  padding: '75px 50px',
  color: "#d8dee9",
  backgroundColor: "#2e3440",
  borderRadius: '5px',
  boxShadow:" 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
};


export const Display = props => {
  const result = beautinator(props);
  let pluginsArr = props.plugins.map(el => (
    JSON.parse(JSON.stringify(`const ${el} = require(${el});`))
  ));
  const result2 = JSON.stringify(props, undefined, 4);
  return (
    <div style={style}>
      <div class="textarea-wrap">
        <div class="window-btns">
          <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg>
        </div>


      <textarea
        style={textAreaStyle}
        value={`const path = require("path"); 
${pluginsArr}

module.exports = ${result2}`}
      />
      </div>
    </div>
  );
};
