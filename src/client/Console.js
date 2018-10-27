import React from "react";

const wrap = {
  width: "20%",
  borderRight: "2px solid #FF5D52"
};

const fieldWrap = {
  margin: "10px 0 10px 10px"
};

export const Console = props => {
  return (
    <div style={wrap}>
      <div style={fieldWrap}>
        {/* MODE */}
        <label>Mode</label>
        <select
          onChange={e => {
            props.modeHandler(e);
          }}
        >
          <option value="none">None</option>
          <option value="development">Development</option>
          <option value="production">Production</option>
        </select>
      </div>

      <div style={fieldWrap}>
        {/* ENTRY */}
        <label>Entry point</label>
        <input
          value={props.entry}
          onChange={e => {
            props.entryHandler(e);
          }}
          placeholder="Please enter entry point"
        />
      </div>

      {/* OUTPUT */}
      <div style={fieldWrap}>
        <label>Output Path</label>
        <input
          value={props.path}
          onChange={e => props.outputPathHandler(e)}
          type="text"
        />
      </div>

      <div style={fieldWrap}>
        <label>Output Filename</label>
        <input
          value={props.filename}
          onChange={e => props.outputFilenameHandler(e)}
          type="text"
        />
      </div>

      {/* MODULE */}
      <div style={fieldWrap}>
        <label>Module Rules Test</label>
        <input
          value={props.rulesTest}
          onChange={e => props.moduleRulesTestHandler(e)}
          type="text"
        />
      </div>
      <div style={fieldWrap}>
        <label>Module Rules Loader</label>
        <input
          value={props.rulesLoader}
          onChange={e => props.moduleRulesLoaderHandler(e)}
          type="text"
        />
      </div>

      <div style={fieldWrap}>
        {/* DEVTOOL */}
        <label>Devtool</label>
        <select onChange={props.devtoolHandler}>
          <option value="source-map">source-map</option>
          <option value="eval">eval</option>
          <option value="cheap-eval-source-map">cheap-eval-source-map</option>
          <option value="eval-source-map">eval-source-map</option>
          <option value="cheap-source-map">cheap-source-map</option>
          <option value="cheap-module-source-map">
            cheap-module-source-map
          </option>
          <option value="inline-cheap-source-map">
            inline-cheap-source-map
          </option>
          <option value="inline-cheap-module-source-map">
            inline-cheap-module-source-map
          </option>
          <option value="hidden-source-map">hidden-source-map</option>
          <option value="inline-source-map">inline-source-map</option>
          <option value="nosources-source-map">nosources-source-map</option>
        </select>
      </div>

      <div style={fieldWrap}>
        {/* STATS */}
        <label>Stats</label>
        <select onChange={props.statsHandler}>
          <option>none</option>
          <option>errors-only</option>
          <option>minimal</option>
          <option>normal</option>
          <option>verbose</option>
        </select>
      </div>

      <div style={fieldWrap}>
        {/* DEVSERVER */}
        <label>DevServer</label>
        <select onChange={props.devserverHandler}>
          <option>proxy</option>
        </select>
      </div>

      <div style={fieldWrap}>
        {/* PLUGINS */}
        <label>Plugins</label>
        <input onClick={props.pluginsHandler} type="button" />
        <input type="text" placeholder="Please enter your module" />
      </div>
    </div>
  );
};
