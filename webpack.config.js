const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'development',

  entry: './src/index.js',

  // module: {
  //   rules: [{
  //     test: /\.css$/,
  //     use: ['css-loader']
  //     // use: [ 'style-loader', 'css-loader' ]
  //   }]
  // },

  resolve: {
    alias: {
      three$: 'three/build/three.min.js',
      'three/.*$': 'three'
      // 'three/OrbitControls': path.join(__dirname, 'node_modules/three/examples/js/controls/OrbitControls.js'),
      // 'three/OBJLoader': path.join(__dirname, 'node_modules/three/examples/js/loaders/OBJLoader.js')
	  }
    // extensions: ['.js']
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },

  plugins: [

    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    new webpack.ProvidePlugin({
      'THREE': 'three'
    })

  ]

};
