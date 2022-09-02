const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {

    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'ts-loader',
            
        }
    }
]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
};