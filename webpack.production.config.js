const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  entry: {
    new_tab: path.resolve(__dirname, 'src/app/new_tab.js'),
    popup: path.resolve(__dirname, 'src/app/popup.js'),
  },

  output: {
    path: path.resolve(__dirname, 'extension/dist'),
    filename: '[name].js'
  },

  resolve: {
    extensions: [ '.js', '.json', '.scss', '.css' ],
    alias: {
      utils: path.resolve(__dirname, 'src/app/utils'),
      images: path.resolve(__dirname, 'src/images'),
      styles: path.resolve(__dirname, 'src/styles')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loaders: [ 'html-loader' ]
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [ 'css-loader', 'sass-loader' ]
          }
        )
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/views/popup.html'),
      filename: 'popup.html',
      chunks: ['popup'],
      inject: true,
      minify: {}
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/views/new_tab.html'),
      filename: 'new_tab.html',
      chunks: ['new_tab'],
      inject: true,
      minify: {}
    }),

    new webpack.optimize.UglifyJsPlugin(
      {
        sourceMap: true,
        compress: {
          warnings: false
        },
        comments: false
      }
    ),

    new ExtractTextPlugin('[name].css'),

    new CompressionPlugin(
      {
        test: /\.js$|\.css$|\.html$/
      }
    ),

    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],

  devtool: 'cheap-module-source-map'
}
