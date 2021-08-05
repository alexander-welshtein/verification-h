const path = require('path')
const html = require('html-webpack-plugin')
const externals = require('webpack-node-externals')

const clientConfig = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new html({
      template: './client/index.html',
      minify: true
    })
  ],
  devServer: {
    static: path.join(__dirname, './client/dist'),
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-syntax-jsx',
              '@babel/plugin-transform-react-jsx',
              [
                '@babel/plugin-proposal-pipeline-operator',
                { proposal: 'fsharp' }
              ]
            ]
          }
        }
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        use: '@svgr/webpack'
      },
      {
        test: /\.png$/,
        type: 'asset/resource'
      }
    ]
  }
}

const serverConfig = {
  target: 'node',
  entry: './server/main.js',
  output: {
    path: path.resolve(__dirname, './server/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              [
                '@babel/plugin-proposal-pipeline-operator',
                { proposal: 'fsharp' }
              ]
            ]
          }
        }
      },
      {
        test: /\.gql$/,
        use: 'raw-loader'
      }
    ]
  },
  externals: [externals()]
}

module.exports = [
  clientConfig,
  serverConfig
]