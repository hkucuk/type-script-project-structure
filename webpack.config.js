const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
//Uygulamanin giris noktasi
entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  //dev server ayarlari
  devServer: {
    compress: true,
    port: 8080,
    watchContentBase: true
  }, 
  module: {
     //test ile belirtilen pattern'e uyan durum icin yapilacak islemler
     //burada tanimlaniyor
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
plugins: [new BundleAnalyzerPlugin()],
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
}

module.exports = config;