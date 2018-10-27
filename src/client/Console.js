import React from "react";

const wrap = {
  width: "395px",
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
        <select
          class="custom-select" 
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
        <label class="form-label">Entry point</label>
        <input
          class="input-form"
          value={props.entry}
          onChange={e => {
            props.entryHandler(e);
          }}
          placeholder="Please enter entry point"
        />
      </div>

      {/* OUTPUT */}
      <div style={fieldWrap}>
        <label class="form-label">Output Path</label>
        <input
          class="input-form"
          value={props.path}
          onChange={e => props.outputPathHandler(e)}
          type="text"
        />
      </div>

      <div style={fieldWrap}>
        <label class="form-label">Output Filename</label>
        <input
          class="input-form"
          value={props.filename}
          onChange={e => props.outputFilenameHandler(e)}
          type="text"
        />
      </div>

      {/* MODULE */}
      <div style={fieldWrap}>
        <label class="form-label">Module Rules Test</label>
        <input
          class="input-form"
          value={props.rulesTest}
          onChange={e => props.moduleRulesTestHandler(e)}
          type="text"
        />
      </div>
      <div style={fieldWrap}>
        <label class="form-label">Module Rules Loader</label>
        <input
          class="input-form"
          value={props.rulesLoader}
          onChange={e => props.moduleRulesLoaderHandler(e)}
          type="text"
        />
      </div>

      <div style={fieldWrap}>
        {/* DEVTOOL */}
        <label class="form-label">Devtool</label>
        <select 
          class="custom-select" 
          onChange={props.devtoolHandler}>
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
        <label class="form-label">Stats</label>
        <select 
          class="custom-select" 
          onChange={props.statsHandler}>
          <option value="none">none</option>
          <option value="errors-only">errors-only</option>
          <option value="minimal">minimal</option>
          <option value="normal">normal</option>
          <option value="verbose">verbose</option>
        </select>
      </div>

      <div style={fieldWrap}>
        {/* DEVSERVER */}
        <label class="form-label">DevServer Port</label>
        <input
          class="input-form"
          value={props.devServerPort}
          onChange={e => props.devServerPortHandler(e)}
          type="text"
        />
      </div>

      <div style={fieldWrap}>
        <label class="form-label">DevServer Proxy</label>
        <input
          class="input-form"
          value={props.devServerProxy}
          onChange={e => props.devServerProxyHandler(e)}
          type="text"
        />
      </div>

      <div style={fieldWrap}>
        <label class="form-label">DevServer Open</label>
        <select onChange={props.devServerOpenHandler}>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div>

      <div style={fieldWrap}>
        {/* PLUGINS */}
        <label class="form-label">Plugins</label>
        <input onChange={props.pluginsHandler} />
        <input type="text" placeholder="Please enter your module" />
      </div>
    </div>
  );
};
