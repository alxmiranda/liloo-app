const HtmlWebpackPlugin = require('html-webpack-plugin');
// const StyleLintPlugin = require('stylelint-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const webpack = require('webpack');

const rootDir = path.resolve(__dirname, '../../');
const srcDir = path.resolve(__dirname, '../../src/');

module.exports = {
  entry: {
    index: path.resolve(srcDir, 'index'),
  },
  output: {
    path: path.join(rootDir, 'dist'),
    chunkFilename: '[name].[chunkhash:8].js',
    filename: '[name].[chunkhash:8].bundle.js',
  },
  resolve: {
    modules: [
      path.resolve(rootDir, 'src/'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.scss$/,
        exclude: /node_module/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        exclude: [
          /\.html$/,
          /\.jsx?$/,
          /\.scss$/,
          /\.css$/,
        ],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'data/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: rootDir, verbose: true }),
    // new ExtractTextPlugin({
    //   filename: '[name].[hash:8].css',
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: 'vendor.[chunkhash:8].js',
    //   minChunks: function(module){
    //     return module.context && module.context.indexOf("node_modules") !== -1;
    //   },
    // }),
    new DotenvPlugin({
      sample: `./config/environments/${process.env.NODE_ENV}/.env`,
      path: `./config/environments/${process.env.NODE_ENV}/.env`
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(srcDir, 'index.html'),
      inject: true,
      // hash: true,
      // chunks: ['index', 'vendor'],
      // minify: {
      //   collapseWhitespace: true,
      //   collapseInlineTagWhitespace: true,
      //   keepClosingSlash: true,
      //   minifyCSS: true,
      //   minifyJS: true,
      //   removeAttributeQuotes: true,
      //   removeComments: true,
      //   removeEmptyAttributes: true,
      //   removeRedundantAttributes: true,
      // },
    }),
    // new StyleLintPlugin({
    //   emitErrors: false,
    //   quiet: false,
    // }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    //   openAnalyzer: false,
    // }),
  ],
  devtool: 'source-map',
};
