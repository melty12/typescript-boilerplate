const path = require("path");

module.exports = {
  mode: "development",
  entry: { app: "./src/index.ts" },
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    library: ["com", "example"],
    libraryTarget: "umd",
    path: `${__dirname}/public`
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", "json"]
  },
  devServer: {
    open: true,
    openPage: "index.html",
    contentBase: path.join(__dirname, "public"),
    watchContentBase: true,
    port: 8080
  },
  devtool: "inline-source-map"
};
