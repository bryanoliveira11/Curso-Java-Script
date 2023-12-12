const path = require('path'); // CommonJS

module.exports = {
    mode: 'production',
    // source
    entry: './src/index.js',
    // babel bundle output
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    // source map to debug errors
    devtool: 'source-map'
};
