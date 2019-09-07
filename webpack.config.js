var path=require('path');
var prod=false;
module.exports=options=>{
    let filename;
    if(prod){filename='bundle.[hash].js';}
    else{filename='index.js';}
    
    return{
        
        entry:'./index.js',
        output:{
           // path:__dirname+"/lib",
            path:path.join(__dirname,"lib"),
           // filename:'bundle.js'
           chunkFilename: '[name].bundle.js',
            filename:'bundle.[hash].js'
        },
        module: {
            rules: [
              {
                test: /\.m?js$/,
                exclude:/(node_modules)/,
                use: 
                  { loader: 'babel-loader' ,
                  options:{
                      presets:['@babel/preset-env']
        
                          }
                        }
                    }
                ]
            },
        devServer: {
                contentBase: path.join(__dirname, 'lib'),
                compress: true,
                port: 7000
              } 
              ,
        devtool:'source-map',
        optimization:{
            splitChunks:{
              
                        chunks:'all'
              
            }
        }
    }
};
