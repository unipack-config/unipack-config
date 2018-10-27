const React = require("react");
const ReactDOM = require("react-dom");
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
      mode: '',
      entry: './index.js',
      output: {
        path: 'path.resolve(__dirname, "dist")', 
        filename: 'bundle.js',
      },
      module: {},
      resolve: {},
      performance: {},
      devtool: '',
      context: '__dirname',
      target: '',
      externals: [],
      stats: '',
      devserver: {},
      plugins: []
    };

    this.modeHandler = this.modeHandler.bind(this);
    this.entryHandler = this.entryHandler.bind(this);
    this.outputPathHandler = this.outputPathHandler.bind(this);
    this.outputFilenameHandler = this.outputFilenameHandler.bind(this);
    this.moduleHandler = this.moduleHandler.bind(this);    
    this.resolveHandler = this.resolveHandler.bind(this);
    this.performanceHandler = this.performanceHandler.bind(this);    
    this.devtoolHandler = this.devtoolHandler.bind(this);
    this.contextHandler = this.contextHandler.bind(this);    
    this.targetHandler = this.targetHandler.bind(this);
    this.externalsHandler = this.externalsHandler.bind(this);    
    this.statsHandler = this.statsHandler.bind(this);
    this.devserverHandler = this.devserverHandler.bind(this);
    this.pluginsHandler = this.pluginsHandler.bind(this);
  }

  modeHandler(e) {
    e.preventDefault();
    console.log('e', e.target.value);
    this.setState({ mode: e.target.value });
  }
  entryHandler(e) {
    e.preventDefault();
    console.log('e', e.target.value);
    this.setState({ entry: e.target.value });
  }
  outputPathHandler(e) {
    e.preventDefault();
    this.setState({ output: {...this.state.output, path: e.target.value} });
  }
  outputFilenameHandler(e) {
    e.preventDefault();
    this.setState({ output: {...this.state.output, filename: e.target.value} });
  }
  moduleHandler(e) {
    e.preventDefault();
    this.setState({ module: {} });
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
    this.setState({ devtool: e.target.value });
    console.log(this.state);
  }
  contextHandler(e) {
    e.preventDefault();
    this.setState({ content: e.target.value });
  }
  targetHandler(e) {
    e.preventDefault();
    this.setState({ target: e.target.value });
    console.log(this.state);
  }
  externalsHandler(e) {
    e.preventDefault();
    this.setState({ external: [] });
  }
  statsHandler(e) {
    e.preventDefault();
    this.setState({ stats: e.target.value });
    console.log(this.state);
  }
  devserverHandler(e) {
    e.preventDefault();
    this.setState({ devServer: {} });
    console.log(this.state);
  }
  pluginsHandler(e) {
    e.preventDefault();
    this.setState({ plugins: [] });
  }

  render() {
    return (
      <div style={style}>
        <Console
          modeHandler={this.modeHandler}
          entryHandler={this.entryHandler}
          entry = {this.state.entry}
          outputPathHandler = {this.outputPathHandler}
          outputFilenameHandler = {this.outputFilenameHandler}
          path = {this.state.output.path}
          filename = {this.state.output.filename}
          moduleHandler={this.moduleHandler}          
          resolveHandler={this.resolveHandler}
          performanceHandler={this.performanceHandler}          
          devtoolHandler={this.devtoolHandler}
          devtool = {this.state.devtool}
          contextHandler={this.contextHandler}
          targetHandler={this.targetHandler}        
          target = {this.state.target } 
          externalsHandler={this.externalsHandler}
          statsHandler={this.statsHandler}       
          stats = {this.state.stats}   
          devserverHandler={this.devserverHandler}
          pluginsHandler={this.pluginsHandler}
        />
        <Display {...this.state} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
