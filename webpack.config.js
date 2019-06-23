const path = require('path');

 const server = {
    entry: path.join(__dirname, '/index.ts'),
    output: {
        filename: 'index.js',
        path: __dirname
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};

const client = {
    entry: path.join(__dirname, '/index.ts'),
    output: {
        filename: 'index.js',
        path: __dirname
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: 'client.js',
        library: 'workspace-client',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist')
    }
};

module.exports = [server, client]