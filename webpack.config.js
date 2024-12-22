const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};

// module.exports = {
//   module: {
//     rules: [
//       { test: /\.(js)$/, use: "babel-loader" },
//       { test: /\.css$/, use: ["style-loader", "css-loader"] },
//     ],
//   },
//   devServer: {
//     historyApiFallback: true,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, "src/index.html"),
//       publicPath: "/",
//     }),
//   ],
// };
