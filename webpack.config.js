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
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: ["file-loader"]
      }
    ]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  devServer: {
    historyApiFallback: true,
    contentBase: "./public",
    open: true,
    hot: true,
    overlay: true
  }
};
