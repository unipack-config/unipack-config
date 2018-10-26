const React = require("react");
const ReactDOM = require("react-dom");
import { Console } from "./Console";
import { Display } from "./Display";
require("./index.css");
import { AccordionExampleMenu } from "./Console2";

const style = {
  display: "flex"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.modeHandler = this.modeHandler.bind(this);
    this.entryHandler = this.entryHandler.bind(this);
    this.outputHandler = this.outputHandler.bind(this);
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

  modeHandler() {
    this.setState({ mode: "none" });
    console.log(this.state);
  }
  entryHandler() {
    this.setState({ entry: "./index.js" });
  }
  outputHandler() {
    this.setState({ output: {} });
    console.log(this.state);
  }
  moduleHandler() {
    this.setState({ module: {} });
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
    this.setState({ stats: "string" });
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
          moduleHandler={this.moduleHandler}
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
        <div style={{ width: "50%" }}>
          <AccordionExampleMenu />
        </div>

        <Display {...this.state} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
