const path = require('path');

module.exports = {
    mode : 'production',
    entry: './src/chat-bot.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    "to-string-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss']
    },
    output: {
        filename: 'chat-bot.js',
        path: path.join(__dirname, 'dist')
    }
}