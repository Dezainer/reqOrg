var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
 
module.exports = {
  entry: [
    './src/routes.js'
  ],
  resolve:{
    modules:[
      "node_modules",
      path.resolve(__dirname, "src/pages"),
      path.resolve(__dirname, "src/components")
    ],
    extensions: [".js", ".css"]
  },
  output: { 
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js" 
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ['es2015', 'react']
        },
        exclude: path.resolve(__dirname, "node_modules")
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            query: {
              limit: 1024,
              name: '/footage/[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      },
      { 
        test: /\.(ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            query: {
              limit: 1024,
              name: '/fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     screw_ie8: true,
    //     warnings: false
    //   }
    // })
  ],
  devServer: {
    watchOptions: {
      poll: true
    },
    stats: {
      warnings: false
    }
  }
};