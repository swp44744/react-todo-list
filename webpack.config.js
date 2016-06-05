//Write your own webpack configuration.
module.exports = {
    entry:['./client/client.js'],
    output : {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel-loader', //babel is used to compile jsx or ES6
                exclude: /node_modules/,
                //query will tell babel what to do with all java script file
                //Compile Jsx & ES6 to java script
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}
