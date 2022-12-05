module.exports = {
  devServer: {
    // proxy: 'http://localhost:8000'
    proxy: {
      '/api': { // 匹配所有以 '/api1'开头的请求路径
        target: 'http://localhost:8000', // 代理目标的基础路径
        changeOrigin: true // 用于控制请求头中的host值
        // pathRewrite: { '^/api1': '' }
      }
    }
  }
}
