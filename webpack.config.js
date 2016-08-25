/**
 * Created by kerovieux on 16/8/26.
 */
module.exports = {
  entry: './js/main.js',
  output:{
    path: './js/',
    filename: 'main.bundle.js'
  },
  module: {
    loaders:[
      { test: /\.js[x]?$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader' }
    ]
  }
};