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
        <label>Mode</label>
        <select onChange={props.modeHandler}>
          <option>None</option>
          <option>Development</option>
          <option>Production</option>
        </select>

      </div>
      {/* ENTRY */}
      <label>Entry point</label>
      <input onChange={props.entryHandler} placeholder="Please enter entry point" />

      {/* OUTPUT */}
      {/* <div>
          <label>Output</label>
          <input onClick={props.outputHandler} type="button" />
        </div> */}

      <div>
        <label>Output Path</label>
        <input onClick={props.outputPathHandler} type="button" />
        <input type="text" placeholder="Please enter your output path" />
      </div>

      <div>
        <label>Output Filename</label>
        <input onClick={props.outputFilenameHandler} type="button" />
        <input type="text" placeholder="Please enter your output filename" />
      </div>

      <div>
        <label>Output Public Path</label>
        <input onClick={props.outputPublicPathHandler} type="button" />
        <input type="text" placeholder="Please enter your output public path" />
      </div>

      <div>
        <label>Output Library</label>
        <input onClick={props.outputLibrary} type="button" />
        <input type="text" placeholder="Please enter your output library" />
      </div>

      <div>
        <label>Output Library Target</label>
        <input onClick={props.outputLibraryTarget} type="button" />
        <input type="text" placeholder="Please enter your output library target" />
      </div>

      {/* MODULE */}
      {/* <div>
          <label>Module</label>
          <input onClick={props.moduleHandler} type="button" />
          <input type="text" placeholder="Please enter your module" />
        </div> */}

      <div>
        <label>Add Modules Rule</label>
        <input onClick={props.modulesRulesHandler} type="button" value='+' />
        <input type="text" placeholder="Please enter your module rules" />
      </div>

      {/* RESOLVE */}
      <div>
        <label>Resolve</label>
        <input onClick={props.resolveHandler} type="button" />
        <input type="text" placeholder="Please enter your module" />
      </div>
      {/* PERFORMANCE */}
      <div>
        <label>Performance</label>
        <input onClick={props.performanceHandler} type="button" />
        <input type="text" placeholder="Please enter your module" />
      </div>
      <div>
        {/* DEVTOOL */}
        <label>Devtool</label>
        <select onClick={props.devtoolHandler}>
          <option>source-map</option>
          <option>eval</option>
          <option>cheap-eval-source-map</option>
          <option>eval-source-map</option>
          <option>cheap-source-map</option>
          <option>cheap-module-source-map</option>
          <option>inline-cheap-source-map</option>
          <option>inline-cheap-module-source-map</option>
          <option>hidden-source-map</option>
          <option>inline-source-map</option>
          <option>nosources-source-map</option>
        </select>
      </div>

      <div>
        {/* Context */}
        <label>Context</label>
        <input onClick={props.contextHandler} type="button" />
        <input type="text" placeholder="Please enter your module" />
      </div>

      <div>
        {/* Target */}
        <label>Target</label>
        <input onClick={props.targetHandler} type="button" />
        <input type="text" placeholder="Please enter your module" />
      </div>

      <div>
        {/* Externals */}
        <label>Externals</label>
        <input onClick={props.externalsHandler} type="button" />
        <input type="text" placeholder="Please enter your module" />
      </div>

      <div>
        {/* STATS */}
        <label>Stats</label>
        <select onChange={props.statsHandler} >
          <option>none</option>
          <option>errors-only</option>
          <option>minimal</option>
          <option>normal</option>
          <option>verbose</option>
        </select>

      </div>

      <div>
        {/* DEVSERVER */}
        <label>DevServer</label>
        <select onChange={props.devserverHandler}>
          <option>proxy</option>
        </select>
      </div>

      <div>
        {/* PLUGINS */}
        <label>Plugins</label>
        <input onClick={props.pluginsHandler} type="button" />
        <input type="text" placeholder="Please enter your module" />
      </div>

    </div>
  );
};
