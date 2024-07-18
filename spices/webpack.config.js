const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
  // ... other webpack configurations ...

  module: {
    rules: [
      {
        test: /\.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    // ... other plugins ...

    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'dist/spices/assets' } // Copy assets folder
      ]
    }),

    new FileManagerPlugin({
      events: {
        // Copy favicon.ico to the root of the output directory *after* the build process ends
        onEnd: {
          copy: [
            { source: 'dist/spices/favicon.ico', destination: 'dist/spices' }
          ]
        }
      }
    })
  ]
};
