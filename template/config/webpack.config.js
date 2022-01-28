const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const alias = require("./alias");

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    alias: { ...alias },
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html')
    })
  ],
  output: {
    filename: "bundle.[fullhash].js",
    path: path.resolve(__dirname, '..', './build')
  }
}