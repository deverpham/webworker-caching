const glob = require('glob');
const path = require('path');
const appPath = path.join(__dirname, '../app');
const distPath = path.join(__dirname, '../dist');
const CopyPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    mode: 'production',
    target:'node',
    entry: {
        bundle: path.join( appPath, 'index.ts')
    },
    watch: false,
    output: {
        path: path.resolve(distPath),
    },
    module :{
        rules :[
            {
                test:/\.ts$/,
                use: [
                    'ts-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CopyPlugin([
            {
                from: appPath + '/www',
                to: './www'
            }
        ])
    ],
    externals : [
        nodeExternals(),
    ]
}
