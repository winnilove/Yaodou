module.exports = {
    devServer: {
      proxy: {
        '/apis': {
          target: 'http://gateway.yaodouwang.com',
          changeOrigin: true,
          pathRewrite: {
            '^/apis': ''   //需要rewrite的,
          } 
        },
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
        }
      }
    }
}