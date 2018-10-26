import React from "react";
const beautinator = require("beautinator");
import { Icon } from "semantic-ui-react";

const style = {
  width: "100%",
  border: "1px solid black",
  height: "100vh"
};

const textAreaStyle = {
  background: "#2d2d2d",
  width: "100%",
  height: "100vh",
  color: "white",
  fontFamily: "Monaco",
  border: "1px solid black"
};

export const Display = props => {
  const result = beautinator(props);

  const result2 = JSON.stringify(props, undefined, 4);
  return (
    <div style={style}>
      {/* <textarea
        style={textAreaStyle}
        value={`const path = require("path");
      
module.exports = ${result2};`}
      />
      <Icon name="copy outline" size="large" style={{ cursor: "copy" }} /> */}

      <div style={style}>
        <div>
          <span class="code_line">const path = require('path');</span>
        </div>

        <span class="code_line">module.exports = &#123;</span>
        <span class="code_line">
          <div>mode:</div>
        </span>
        <span class="code_line">entry: "./app/entry",</span>
        <span class="code_line">output: &#123;</span>
        <span class="code_line">path: path.resolve(__dirname, "dist"),</span>
        <span class="code_line">filename: "bundle.js", </span>
        <span class="code_line">publicPath: "/assets/", </span>
        <span class="code_line">library: "MyLibrary", </span>
        <span class="code_line">libraryTarget: "umd",</span>
        <span class="code_line">module: &#123;</span>
        <span class="code_line">rules: &#91;</span>
        <span class="code_line">&#123;</span>
        <span class="code_line">test: /\.jsx?$/,</span>
        <span class="code_line">include: &#91;</span>
        <span class="code_line">path.resolve(__dirname, "app")</span>
        <span class="code_line">&#93;,</span>
        <span class="code_line">exclude: &#91;</span>
        <span class="code_line">path.resolve(__dirname, "app/demo-files")</span>
        <span class="code_line">&#93;,</span>
        <span class="code_line">
          issuer: &#123; test, include, exclude &#125;,
        </span>
        <span class="code_line">enforce: "pre",</span>
        <span class="code_line">enforce: "post",</span>
        <span class="code_line">loader: "babel-loader",</span>
        <span class="code_line">options: &#123;</span>
        <span class="code_line">presets: &#91;"es2015"&#93;</span>
        <span class="code_line">&#125;,</span>
        <span class="code_line">&#125;,</span>
        <span class="code_line">&#123;</span>
        <span class="code_line">test: /\.html$/,</span>
        <span class="code_line">use: &#91;</span>
        <span class="code_line">"htmllint-loader",</span>
        <span class="code_line">&#123;</span>
        <span class="code_line">loader: "html-loader",</span>
        <span class="code_line">options: &#123;</span>
        <span class="code_line">&#125;</span>
        <span class="code_line">&#125;</span>
        <span class="code_line">&#93;</span>
        <span class="code_line">&#125;,</span>
        <span class="code_line">&#123; oneOf: &#91; &#93; &#125;,</span>
        <span class="code_line">&#123; rules: &#91; &#93; &#125;,</span>
        <span class="code_line">
          &#123; resource: &#123; and: &#91; &#93; &#125; &#125;,
        </span>
        <span class="code_line">
          &#123; resource: &#123; or: &#91; &#93; &#125; &#125;,
        </span>
        <span class="code_line">&#123; resource: &#91; &#93; &#125;,</span>
        <span class="code_line">
          &#123; resource: &#123; not: &#125; &#125;
        </span>
        <span class="code_line">&#93;,</span>
        <span class="code_line">resolve: &#123;</span>
        <span class="code_line">modules: &#91;</span>
        <span class="code_line">"node_modules",</span>
        <span class="code_line">path.resolve(__dirname, "app")</span>
        <span class="code_line">&#93;,</span>
        <span class="code_line">
          extensions: &#91;".js", ".json", ".jsx", ".css"&#93;,
        </span>
        <span class="code_line">alias: &#123;</span>
        <span class="code_line">"module": "new-module",</span>
        <span class="code_line">"only-module$": "new-module",</span>
        <span class="code_line">
          "module": path.resolve(__dirname, "app/third/module.js"),
        </span>
        <span class="code_line">&#125;,</span>
        <span class="code_line">performance: &#123; </span>
        <span class="code_line">maxEntrypointSize: 400000, </span>
        <span class="code_line">
          assetFilter: function(assetFilename) &#123;
        </span>
        <span class="code_line">
          return assetFilename.endsWith('.css') ||
          assetFilename.endsWith('.js');
        </span>
        <span class="code_line">&#125;</span>
        <span class="code_line">&#125;,</span>
        <span class="code_line">devtool: "source-map", </span>
        <span class="code_line">context: __dirname, </span>
        <span class="code_line">target: "web", </span>
        <span class="code_line">
          externals: &#91;"react", /^@angular\//&#93;,{" "}
        </span>
        <span class="code_line">serve: &#123; </span>
        <span class="code_line">port: 1337,</span>
        <span class="code_line">content: './dist',</span>
        <span class="code_line">&#125;,</span>
        <span class="code_line">stats: "errors-only",</span>
        <span class="code_line">devServer: &#123; </span>
        <span class="code_line">proxy: &#123; </span>
        <span class="code_line">'/api': 'http://localhost:3000'</span>
        <span class="code_line">&#125;,</span>
        <span class="code_line">
          contentBase: path.join(__dirname, 'public'),{" "}
        </span>
        <span class="code_line">compress: true,</span>
        <span class="code_line">historyApiFallback: true, </span>
        <span class="code_line">hot: true, </span>
        <span class="code_line">https: false, </span>
        <span class="code_line">noInfo: true, </span>
        <span class="code_line">&#125;,</span>
        <span class="code_line">plugins: &#91;</span>
        <span class="code_line">&#93;,</span>
      </div>
    </div>
  );
};
