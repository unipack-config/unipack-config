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
    this.state = {};
    this.modeHandler = this.modeHandler.bind(this);
    this.entryHandler = this.entryHandler.bind(this);
  }

  modeHandler() {
    this.setState({ mode: "none" });
    console.log(this.state);
  }
  entryHandler() {
    this.setState({ entry: "./index.js" });
  }

  render() {
    return (
      <div style={style}>
        <Console
          entryHandler={this.entryHandler}
          modeHandler={this.modeHandler}
        />
        <Display {...this.state} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
