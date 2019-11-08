
module.exports = {
  devServer: {
    proxy: 'http://127.0.0.1:8088'//修改为自己的地址
  },
    assetsDir: "./static",
    publicPath: "./"
}