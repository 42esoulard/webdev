/* global require module __dirname */
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
        {
            test: /\.css$/i, //import .css files
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i, //import image files
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i, //import font files
            type: 'asset/resource',
        },
        // { //comment out this rule to not use Babel
        //   test: /\.m?js$/,
        //   exclude: /node_modules/,
        //   use: {
        //     loader: 'babel-loader',
        //     options: {
        //       presets: [
        //         [
        //           '@babel/preset-env', 
        //           { 
        //             useBuiltIns: 'usage',
        //             corejs: 3,
        //             targets: "defaults"
        //           }
        //         ]
        //       ]
        //     }
        //   }
        // },
      ],
    },
};
