var webpack = require('webpack');
module.exports = {
    entry: {
        "main": "./src/main"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }

        ]
    },
    resolve:{
        alias:{
            "vue":"vue/dist/vue.js"
        },
        extensions:['.js','.css','.vue']
    },
    devServer:{
        open:true,
        inline:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool:"chep-eval-source-map"
};