const path = require('path');

console.log(__dirname);

module.exports = {
  mode: 'development',
  entry: './user/index.jsx',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ],
          plugins: [
            "babel-plugin-styled-components",
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-do-expressions',
            '@babel/plugin-proposal-nullish-coalescing-operator',
            "@babel/plugin-transform-runtime",
          ]
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader', 'css-loader'
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'pub'),
    filename: "bundle.js"
  }
}