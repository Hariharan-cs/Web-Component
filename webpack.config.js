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
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
    resolve: {
         extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
    },
    output: {
        filename: 'chat-bot.js',
        path: path.join(__dirname, 'build')
    }
}