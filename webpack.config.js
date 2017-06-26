const path = require('path')

module.exports = {
  entry: [path.join(__dirname,'public/index.js')]
  ,
  output:{
    path:path.join(__dirname,'build'),
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {test:/\.js$/,
       use: ["babel-loader"],
       exclude:/node_modules/
     },
     {test:/\.jsx$/,
      use:["babel-loader"],
      exclude:/node_modules/
   }
    ]
  }
}
