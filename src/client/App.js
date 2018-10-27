const React = require("react");
const ReactDOM = require("react-dom");
import { Header } from "./Header";
import { Console } from "./Console";
import { Display } from "./Display";

require("./index.css");

const style = {
  display: "flex"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "",
      entry: "./index.js",
      output: {
        path: 'path.resolve(__dirname, "dist")',
        filename: "bundle.js"
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            loader: "babel-loader"
          }
        ]
      },
      devtool: "cheap-source-map",
      stats: "",
      devServer: {
        port: 3000,
        open: true,
        proxy: '{ "/api": "http://localhost:8080" }'
      },
      plugins: []
    };

    this.modeHandler = this.modeHandler.bind(this);
    this.entryHandler = this.entryHandler.bind(this);
    this.outputPathHandler = this.outputPathHandler.bind(this);
    this.outputFilenameHandler = this.outputFilenameHandler.bind(this);
    this.moduleRulesTestHandler = this.moduleRulesTestHandler.bind(this);
    this.moduleRulesLoaderHandler = this.moduleRulesLoaderHandler.bind(this);
    this.devtoolHandler = this.devtoolHandler.bind(this);
    this.statsHandler = this.statsHandler.bind(this);
    this.devServerPortHandler = this.devServerPortHandler.bind(this);
    this.devServerProxyHandler = this.devServerProxyHandler.bind(this);
    this.devServerOpenHandler = this.devServerOpenHandler.bind(this);
    this.pluginsHandler = this.pluginsHandler.bind(this);
  }

  modeHandler(e) {
    e.preventDefault();
    console.log("e", e.target.value);
    this.setState({ mode: e.target.value });
  }
  entryHandler(e) {
    e.preventDefault();
    console.log("e", e.target.value);
    this.setState({ entry: e.target.value });
  }
  outputPathHandler(e) {
    e.preventDefault();
    this.setState({ output: { ...this.state.output, path: e.target.value } });
  }
  outputFilenameHandler(e) {
    e.preventDefault();
    this.setState({
      output: { ...this.state.output, filename: e.target.value }
    });
  }
  moduleRulesTestHandler(e) {
    e.preventDefault();
    this.setState({
      module: {
        ...this.state.module,
        rules: [{ ...this.state.module.rules[0], test: e.target.value }]
      }
    });
  }
  moduleRulesLoaderHandler(e) {
    e.preventDefault();
    this.setState({
      module: {
        ...this.state.module,
        rules: [{ ...this.state.module.rules[0], loader: e.target.value }]
      }
    });
  }

  resolveHandler(e) {
    e.preventDefault();
    this.setState({ resolve: {} });
    console.log(this.state);
  }
  performanceHandler(e) {
    e.preventDefault();
    this.setState({ performance: {} });
  }
  devtoolHandler(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ devtool: e.target.value });
  }

  statsHandler(e) {
    e.preventDefault();
    this.setState({ stats: e.target.value });
  }
  devServerPortHandler(e) {
    e.preventDefault();
    this.setState({
      devServer: { ...this.state.devServer, port: e.target.value }
    });
  }
  devServerProxyHandler(e) {
    e.preventDefault();
    this.setState({
      devServer: { ...this.state.devServer, proxy: e.target.value }
    });
  }
  devServerOpenHandler(e) {
    e.preventDefault();
    this.setState({
      devServer: { ...this.state.devServer, open: e.target.value }
    });
  }
  pluginsHandler(e) {
    e.preventDefault();
    this.setState({ plugins: [] });
  }

  render() {
    return (
      <div style={style}>
        <Header />
        <Console
          modeHandler={this.modeHandler}
          entryHandler={this.entryHandler}
          entry={this.state.entry}
          outputPathHandler={this.outputPathHandler}
          outputFilenameHandler={this.outputFilenameHandler}
          path={this.state.output.path}
          filename={this.state.output.filename}
          moduleRulesTestHandler={this.moduleRulesTestHandler}
          moduleRulesLoaderHandler={this.moduleRulesLoaderHandler}
          rulesTest={this.state.module.rules[0].test}
          rulesLoader={this.state.module.rules[0].loader}
          devtoolHandler={this.devtoolHandler}
          devtool={this.state.devtool}
          statsHandler={this.statsHandler}
          stats={this.state.stats}
          devServerPortHandler={this.devServerPortHandler}
          devServerProxyHandler={this.devServerProxyHandler}
          devServerOpenHandler={this.devServerOpenHandler}
          devServerPort={this.state.devServer.port}
          devServerProxy={this.state.devServer.proxy}
          devServerOpen={this.state.devServer.open}
          pluginsHandler={this.pluginsHandler}
        />
        <Display {...this.state} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
