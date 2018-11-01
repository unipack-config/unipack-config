const React = require("react");
const ReactDOM = require("react-dom");
import { Console } from "./Console";
import { Display } from "./Display";
require("./index.css");

const style = {
  display: "flex"
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.modeHandler = this.modeHandler.bind(this);
    this.entryHandler = this.entryHandler.bind(this);
    this.outputHandler = this.outputHandler.bind(this);
    this.outputPathHandler = this.outputPathHandler.bind(this);
    this.outputFilenameHandler = this.outputFilenameHandler.bind(this);
    this.outputPublicPathHandler = this.outputPublicPathHandler.bind(this);
    this.outputLibrary = this.outputLibrary.bind(this);
    this.outputLibraryTarget = this.outputLibraryTarget.bind(this);
    this.moduleHandler = this.moduleHandler.bind(this);
    this.modulesRulesHandler = this.modulesRulesHandler.bind(this);
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

  modeHandler() {
    this.setState({ mode: "none" });
    console.log(this.state);
  }
  entryHandler() {
    this.setState({ entry: "./index.js" });
  }
  outputHandler() {
    this.setState({ 
      output: {
        ...this.state.output
      } 
    });
    console.log(this.state);
  }

  outputPathHandler() {
    this.setState({
      output: {
        ...this.state.output,
        path: "path.resolve(__dirname, 'dist')"
      }
    });
    console.log(this.state);
  }

  outputFilenameHandler() {
    this.setState({
      output: {
        ...this.state.output,
        filename: 'bundle.js'
      }
    });
    console.log(this.state);
  }

  outputPublicPathHandler() {
    this.setState({
      output: {
        ...this.state.output,
        publicPath: '/assets/'
      }
    });
    console.log(this.state);
  }

  outputLibrary() {
    this.setState({
      output: {
        ...this.state.output,
        library: 'MyLibrary'
      }
    });
    console.log(this.state);
  }

  outputLibraryTarget() {
    this.setState({
      output: {
        ...this.state.output,
        libraryTarget: 'umd'
      }
    });
    console.log(this.state);
  }

  moduleHandler() {
    this.setState({ module: {} });
  }

  modulesRulesHandler() {
    let rules = [];
    let rule1 = {
      test: 'REGEX',
      include: [],
      exclude: [],
      issuer: {},
      enforce: '',
      loader: '',
      options: {},
    }
    rules.push(rule1)
    this.setState({
      module: {
        ...this.state.module,
        rules
      }
    });
    console.log(this.state);
  }

  resolveHandler() {
    this.setState({ resolve: {} });
    console.log(this.state);
  }
  performanceHandler() {
    this.setState({ performance: {} });
  }
  devtoolHandler() {
    this.setState({ devtool: "string" });
    console.log(this.state);
  }
  contextHandler() {
    this.setState({ content: "path" });
  }
  targetHandler() {
    this.setState({ target: "string" });
    console.log(this.state);
  }
  externalsHandler() {
    this.setState({ external: [] });
  }
  statsHandler() {
    this.setState({ stats: 'string' });
    console.log(this.state);
  }
  devserverHandler() {
    this.setState({ devServer: {} });
    console.log(this.state);
  }
  pluginsHandler() {
    this.setState({ plugins: [] });
  }

  render() {
    return (
      <div style={style}>
        <Console
          modeHandler={this.modeHandler}
          entryHandler={this.entryHandler}
          outputHandler={this.outputHandler}
          outputPathHandler={this.outputPathHandler}
          outputFilenameHandler={this.outputFilenameHandler}
          outputPublicPathHandler={this.outputPublicPathHandler}
          outputLibrary={this.outputLibrary}
          outputLibraryTarget={this.outputLibraryTarget}
          moduleHandler={this.moduleHandler}
          modulesRulesHandler={this.modulesRulesHandler}          
          resolveHandler={this.resolveHandler}
          performanceHandler={this.performanceHandler}          
          devtoolHandler={this.devtoolHandler}
          contextHandler={this.contextHandler}
          targetHandler={this.targetHandler}          
          externalsHandler={this.externalsHandler}
          statsHandler={this.statsHandler}          
          devserverHandler={this.devserverHandler}
          pluginsHandler={this.pluginsHandler}
        />
        <Display {...this.state} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
