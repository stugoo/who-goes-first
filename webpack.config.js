var path = require('path');
var productionEnvironment = (process.env.NODE_ENV === 'production');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var webpack = require('webpack');

var outPutPath = path.join(__dirname,'./public/assets/js');
var inputPath =  path.join(__dirname, './dev/core');

module.exports = {

  entry: {
   // used for importing new common into old views... this shouldn't break anything right?
    'index':  inputPath
  },

  node: {
    fs: 'empty'
  },

  output: {
    path: outPutPath,
    filename: '[name].js'
  },

  cache: !productionEnvironment,
  
  resolve: {
    extensions: ['.js', '.es6'],
    alias: {
        'core': path.join(__dirname, './src/core'),
        'utils': path.join(__dirname, './src/utils'),
        'plugins': path.join(__dirname, './src/plugins')
    }
  },

  devtool: 'cheap-module-source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel-loader']
      },
      // { test: require.resolve('jquery'), loader: 'expose-loader?jQuery!expose-loader?$' }
    ]
  },

  performance: {
     hints: productionEnvironment ? 'warning' : false
  },

  watchOptions : {
    ignored: /node_modules/
  },

  plugins: productionEnvironment ? [
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      sourcemap: false,
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true
      }
    })
   
  ] : [ ]
};
