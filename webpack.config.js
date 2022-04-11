const path=require('path');

module.exports={
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    mode: 'development',
    devServer:{
        static:{
            directory:path.join(__dirname,"dist")
        },
        compress:true,
        port:9000
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            }
        ]
    }
}