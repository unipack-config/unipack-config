const React = require("react");
import { Header } from "./Header";
import { Console } from "./Console";
import { Display } from "./Display";
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

require("../styles/style.css");

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
  }

  modeHandler = (e) => {
    e.preventDefault();
    this.setState({ mode: e.target.value });
  }
  entryHandler = (e) => {
    e.preventDefault();
    this.setState({ entry: e.target.value });
  }
  outputPathHandler = (e) => {
    e.preventDefault();
    this.setState({ output: { ...this.state.output, path: e.target.value } });
  }
  outputFilenameHandler = (e) => {
    e.preventDefault();
    this.setState({
      output: { ...this.state.output, filename: e.target.value }
    });
  }
  moduleRulesTestHandler = (e) => {
    e.preventDefault();
    this.setState({
      module: {
        ...this.state.module,
        rules: [{ ...this.state.module.rules[0], test: e.target.value }]
      }
    });
  }
  moduleRulesLoaderHandler = (e) => {
    e.preventDefault();
    this.setState({
      module: {
        ...this.state.module,
        rules: [{ ...this.state.module.rules[0], loader: e.target.value }]
      }
    });
  }
  devtoolHandler = (e) => {
    e.preventDefault();
    this.setState({ devtool: e.target.value });
  }
  statsHandler = (e) => {
    e.preventDefault();
    this.setState({ stats: e.target.value });
  }
  devServerPortHandler = (e) => {
    e.preventDefault();
    this.setState({
      devServer: { ...this.state.devServer, port: e.target.value }
    });
  }
  devServerProxyHandler = (e) => {
    e.preventDefault();
    this.setState({
      devServer: { ...this.state.devServer, proxy: e.target.value }
    });
  }
  devServerOpenHandler = (e) => {
    e.preventDefault();
    this.setState({
      devServer: { ...this.state.devServer, open: e.target.value }
    });
  }
  pluginsHandler = (e) => {
    e.preventDefault();
    if (!this.state.plugins.includes(e.target.value)) {
      this.setState({
        plugins: [...this.state.plugins, e.target.value]
      });
    }
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

export default App;