const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: __dirname + "./public",
    publicPath: "/",
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  devServer: {
    contentBase: "./public",
    open: true,
    hot: true
  }
};
