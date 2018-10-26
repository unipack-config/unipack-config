import React from "react";

const style = {
  width: "50%",
  border: "1px solid black"
};

export const Console = props => {
  return (
    <div style={style}>
      <div>
        {/* MODE */}
        <div>
          <label>Mode</label>
          <input type="button" onClick={props.modeHandler} />
        </div>
        {/* ENTRY */}
        <label>Entry point</label>
        <input onClick={props.entryHandler} type="button" />
        <input type="text" placeholder="Please enter your entry point" />

        {/* OUTPUT */}
        <div>
          <label>Output</label>
          <input onClick={props.output} type="button" />
          <input type="text" placeholder="Please enter your entry point" />
        </div>

        {/* MODULE */}
        <div>
          <label>Module</label>
          <input onClick={props.output} type="button" />
          <input type="text" placeholder="Please enter your module" />
        </div>

        {/* RESOLVE */}
        <div>
          <label>Resolve</label>
          <input onClick={props.output} type="button" />
          <input type="text" placeholder="Please enter your module" />
        </div>
        {/* PERFORMANCE */}
        <div>
          <label>Performance</label>
          <input onClick={props.output} type="button" />
          <input type="text" placeholder="Please enter your module" />
        </div>
        <div>
          {/* DEVTOOL */}
          <label>Devtool</label>
          <input onClick={props.output} type="button" />
          <input type="text" placeholder="Please enter your module" />
        </div>

        <div>
          {/* Context */}
          <label>Context</label>
          <input onClick={props.output} type="button" />
          <input type="text" placeholder="Please enter your module" />
        </div>

        <div>
          {/* Target */}
          <label>Target</label>
          <input onClick={props.output} type="button" />
          <input type="text" placeholder="Please enter your module" />
        </div>

        <div>
          {/* Externals */}
          <label>Externals</label>
          <input onClick={props.output} type="button" />
          <input type="text" placeholder="Please enter your module" />
        </div>
        <div>
          {/* DEVSERVER */}
          <label>DevServer</label>
          <input onClick={props.output} type="button" />
          <input type="text" placeholder="Please enter your module" />
        </div>
        <div>
          {/* PLUGINS */}
          <label>Plugins</label>
          <input onClick={props.output} type="button" />
          <input type="text" placeholder="Please enter your module" />
        </div>
      </div>
    </div>
  );
};
