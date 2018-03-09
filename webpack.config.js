'use strict';

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');

module.exports = {
    context: __dirname, // to automatically find tsconfig.json
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    output: { filename: 'dist/index.js' },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true // IMPORTANT! use transpileOnly mode to speed-up compilation
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', 'js' ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            tslint: true,
            watch: ['./src'] // optional but improves performance (fewer stat calls)
        }),
        new ForkTsCheckerNotifierWebpackPlugin({ title: 'TypeScript', excludeWarnings: false }),
    ]
};
