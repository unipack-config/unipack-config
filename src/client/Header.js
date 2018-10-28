import React from "react";
import { relative } from "path";

const header = {
  width: "100vw",
  height: "30px",
  position: "fixed",
  top: '0',
  background: '#5218fa',
  zIndex:'5',
  padding: '10px 25px',

};

export const Header = props => {
  return (
    <div style={header} >
    <span className="title">🌈UNI-PAC 🦄</span>
    </div>
  )
};
