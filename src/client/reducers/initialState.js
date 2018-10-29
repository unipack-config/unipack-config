export default {
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