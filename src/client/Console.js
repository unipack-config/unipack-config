import React from "react";

const wrap = {
  width: "435px",
  height: '95vh',
  padding: '0px 25px 125px 10px',
  overflow: "scroll",
};

const fieldWrap = {
  margin: "10px 0 10px 10px"
}

export const Console = props => {
  return (
    <div style={wrap}>
      <div style={fieldWrap}>
        {/* MODE */}
        <label class="form-label">Mode</label>
        <select class="custom-select" onChange={(e) => {props.modeHandler(e)}}>
          <option class="select-items" value="none">None</option>
          <option class="select-items" value="development">Development</option>
          <option class="select-items" value="production">Production</option>
        </select>
        </div>

        <div style={fieldWrap}>
        {/* ENTRY */}
        <label class="form-label">Entry point</label>
        <input class="input-form" value={props.entry} onChange={(e) => {props.entryHandler(e)}} placeholder="Please enter entry point"/>
        </div>

        {/* OUTPUT */}
        <div style={fieldWrap}>
          <label class="form-label">Output Path</label>
          <input class="input-form" value={props.path} onChange={(e) => props.outputPathHandler(e)} type="text" />
        </div>

        <div style={fieldWrap}>
          <label class="form-label">Output Filename</label>
          <input class="input-form" value={props.filename} onChange={(e) => props.outputFilenameHandler(e)} type="text" />
        </div>

        {/* MODULE */}
        <div style={fieldWrap}>
          <label class="form-label">Module</label>
          <input class="input-form" type="text" placeholder="Please enter your module" />
        </div>

        {/* RESOLVE */}
        <div style={fieldWrap}>
          <label class="form-label">Resolve</label>
          <input class="input-form" type="text" placeholder="Please enter your module" />
        </div>

        {/* PERFORMANCE */}
        <div style={fieldWrap}>
          <label class="form-label">Performance</label>
          <input class="input-form" type="text" placeholder="Please enter your module" />
        </div>

        <div style={fieldWrap}>
          {/* DEVTOOL */}
          <label class="form-label">Devtool</label>
          <select class="custom-select" onChange={props.devtoolHandler}>
            <option class="select-items" value="source-map" >source-map</option>
            <option class="select-items" value="eval" >eval</option>
            <option class="select-items" value="cheap-eval-source-map">cheap-eval-source-map</option>
            <option class="select-items" value="eval-source-map">eval-source-map</option>
            <option class="select-items" value="cheap-source-map">cheap-source-map</option>
            <option class="select-items" value="cheap-module-source-map">cheap-module-source-map</option>
            <option class="select-items" value="inline-cheap-source-map">inline-cheap-source-map</option>
            <option class="select-items" value="inline-cheap-module-source-map">inline-cheap-module-source-map</option>
            <option class="select-items" value="hidden-source-map">hidden-source-map</option>
            <option class="select-items" value="inline-source-map">inline-source-map</option>
            <option class="select-items" value="nosources-source-map">nosources-source-map</option>
          </select>
        </div>

      <div style={fieldWrap}>
          {/* Context */}
          <label class="form-label">Context</label>
          <input class="input-form" type="text" placeholder="Please enter your module" />
        </div>

      <div style={fieldWrap}>
          {/* Target */}
          <label class="form-label">Target</label>
          <input class="input-form" type="text" placeholder="Please enter your module" />
        </div>

      <div style={fieldWrap}>
          {/* Externals */}
          <label class="form-label">Externals</label>
          <input class="input-form" type="text" placeholder="Please enter your module" />
        </div>

      <div style={fieldWrap}>
          {/* STATS */}
          <label class="form-label">Stats</label>
          <select class="custom-select" onChange={props.statsHandler} >
            <option class="select-items">none</option>
            <option class="select-items">errors-only</option>
            <option class="select-items">minimal</option>
            <option class="select-items">normal</option>
            <option class="select-items">verbose</option>
          </select>
  
        </div>

      <div style={fieldWrap}>
          {/* DEVSERVER */}
          <label class="form-label">DevServer</label>
          <select class="custom-select" onChange={props.devserverHandler}>
            <option>proxy</option>
          </select>
        </div>

      <div style={fieldWrap}>
          {/* PLUGINS */}
          <label class="form-label">Plugins</label>
          <input class="input-form" type="text" placeholder="Please enter your module" />
        </div>
      
    </div>
  );
};
