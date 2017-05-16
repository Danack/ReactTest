var webpack = require("webpack");
var path = require("path");

// This is just to test whether uglify is working.
var UglifyJS = require('uglify-js');
var fs = require('fs');
var result = UglifyJS.minify('./src/compress_test.js', {
  mangle: true,
  compress: {
    sequences: true,
    dead_code: true,
    conditionals: true,
    booleans: true,
    unused: true,
    if_return: true,
    join_vars: true,
    drop_console: true
  }
});
fs.writeFileSync('./output/manual.min.js', result.code);

module.exports = {

  entry: "./src/compress_test.js",
  devtool: "source-map",

  output: {
    path: path.resolve('./output'),
    filename: "[name].js"
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      }
    })
  ]
};