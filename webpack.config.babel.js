var webpack = require('webpack');


module.exports = {
    entry: './js/script.js',
    output: {
        filename: "./js/out.js"
     },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2'] }
            },
            {
                test: /\.scss$/,
                use: [
                  {
                  loader: 'style-loader',
                },
                {
                  loader: 'css-loader',
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: true,
                    plugins: function(){
                      return [
                        require('precss'),
                        require('autoprefixer')
                      ];
                    }
                  }
                }, {
                  loader:  "sass-loader?sourceMap"
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=100000'
            },
            {
              test: /\.(jpg|png|svg)$/,
              loader: 'file-loader?name=img/[name].[ext]'
            }
        ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
      })
    ]
}
