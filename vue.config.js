module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.(pdf)(\?.*)?$/,
                    use: [
                      {
                        loader: 'url-loader',
                        options: {
                          name: 'files/[name].[hash:8].[ext]'
                        }
                      }
                    ]
                }
            ],
        },
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : './'
}