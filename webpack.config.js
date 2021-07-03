const path = require('path');

module.exports = {
    node: 'production',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svg/webpack'],
            },
            {
                test: /\.(gif|png|jep?g)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader','css-loader','sass-loader'],
            },
        ],
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        performance: {
            hints: 'warning',
            maxEntrypointSize: 500000,
            maxAssetSize: 500000
        },
        //devtool: 'eval-cheap-module-source-map',
        devtool: 'source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
        },
    },
}