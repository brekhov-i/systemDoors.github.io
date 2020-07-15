const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV settings gonna be here
  mode: "development",

  devtool: "cheap-module-source-map",

  //contentBase: baseWebpackConfig.externals.paths.dist,

  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    port: 8082,
    //host: "192.168.0.105",
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].[hash].map",
    }),
  ],
});
// export devWebpackConfig
module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
