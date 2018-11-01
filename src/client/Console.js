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
        <label className="form-label" data-tippy="Providing the mode configuration option tells webpack to use its built-in optimizations accordingly.">Mode</label>
        <select
          className="custom-select" 
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
        <label className="form-label" data-tippy="The entry object is where webpack looks to start building the bundle.">Entry point</label>
        <input
          className="input-form"
          value={props.entry}
          onChange={e => {
            props.entryHandler(e);
          }}
          placeholder="Please enter entry point"
        />
      </div>

      {/* OUTPUT */}
      <div style={fieldWrap}>
        <label className="form-label" data-tippy="The top-level output key contains options instructing webpack on how and where it should output your bundles, assets and anything else you bundle or load with webpack.">Output Path</label>
        <input
          className="input-form"
          value={props.path}
          onChange={e => props.outputPathHandler(e)}
          type="text"
        />
      </div>

      <div style={fieldWrap}>
        <label className="form-label" data-tippy="This option determines the name of each output bundle. The bundle is written to the directory specified by the output.path option.">Output Filename</label>
        <input
          className="input-form"
          value={props.filename}
          onChange={e => props.outputFilenameHandler(e)}
          type="text"
        />
      </div>

      {/* MODULE */}
      <div style={fieldWrap}>
        <label className="form-label" data-tippy="Rules are matched to requests when modules are created. These options determine how modules within a project will be treated.">Module Rules Test</label>
        <input
          className="input-form"
          value={props.rulesTest}
          onChange={e => props.moduleRulesTestHandler(e)}
          type="text"
        />
      </div>
 
      <div style={fieldWrap}>
        <label className="form-label" data-tippy="Rule.loader is a shortcut to Rule.use: [ { loader } ]. See Rule.use and UseEntry.loader for details.">Module Rules Loader</label>
        <input
          className="input-form"
          value={props.rulesLoader}
          onChange={e => props.moduleRulesLoaderHandler(e)}
          type="text"
        />
      </div>

      <div style={fieldWrap}>
        {/* DEVTOOL */}
        <label className="form-label" data-tippy="Use the SourceMapDevToolPlugin for a more fine grained configuration. See the source-map-loader to deal with existing source maps.">Devtool</label>
        <select 
          className="custom-select" 
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
        <label className="form-label" data-tippy="The stats option lets you precisely control what bundle information gets displayed. Stats are also used to analyze and visualize the webpack configuration.">Stats</label>
        <select 
          className="custom-select"
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
        <label className="form-label" data-tippy="webpack-dev-server can be used to quickly develop an application. See the development guide to get started.">DevServer Port</label>
        <input
          className="input-form"
          value={props.devServerPort}
          onChange={e => props.devServerPortHandler(e)}
          type="text"
        />
      </div>

      <div style={fieldWrap}>
        <label className="form-label" data-tippy="Proxying some URLs can be useful when you have a separate API backend development server and you want to send API requests on the same domain.">DevServer Proxy</label>
        <input
          className="input-form"
          value={props.devServerProxy}
          onChange={e => props.devServerProxyHandler(e)}
          type="text"
        />
      </div>

      <div style={fieldWrap}>
        <label className="form-label" data-tippy="Tells dev-server to open the browser after server had been started. Disabled by default.">DevServer Open</label>
        <select 
          className="custom-select"
          onChange={props.devServerOpenHandler}>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div>

      <div style={fieldWrap}>
        {/* PLUGINS */}
        <label className="form-label" data-tippy="Webpack has a rich plugin interface. Most of the features within webpack itself use this plugin interface. This makes webpack flexible.">Plugins</label>
        <select 
          className="custom-select"
          onChange={props.pluginsHandler}>
          <option
            value="new HtmlWebpackPlugin(
            {`template: './public/index.html'`})"
          >
            new HtmlWebpackPlugin(
            {"template: './public/index.html'"})
          </option>
          <option value="new webpack.optimize.ModuleConcatenationPlugin()">
            new webpack.optimize.ModuleConcatenationPlugin()
          </option>
          <option value="new CleanWebpackPlugin">
            {" "}
            new CleanWebpackPlugin
          </option>
        </select>
      </div>
    </div>
  );
};
