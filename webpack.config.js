//Write your own webpack configuration.
var webpack = require('webpack');

module.exports = {
    entry:[
        'webpack-hot-middleware/client',
        './client/client.js'],
    output : {
        path: require("path").resolve("./dist"),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel-loader', //babel is used to compile jsx or ES6
                exclude: /node_modules/,
                //query will tell babel what to do with all java script file
                //Compile Jsx & ES6 to java script
                query: {
                    presets: ['react', 'es2015','react-hmre']
                }
            }
        ]
    }
}
