const path = require("path");

const CopyWebpakPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "./public"),
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
              modules: {
                localIdentName: '[local]--[hash:base64]'
              }
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

  plugins: [
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html")
    }),
    new CopyWebpakPlugin([
      {
        from: "src/images",
        to: path.resolve(__dirname, "./public/images")
      }
    ])
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: "./public",
    open: true,
    hot: true,
    overlay: true
  }
};
