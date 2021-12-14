const sass = require('sass-loader')

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    // stats: 'verbose',
    module: {
        rules: [
            {
                test: /\.s[ac]ss/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            
        ]
    },
    plugins: [

    ]
}
