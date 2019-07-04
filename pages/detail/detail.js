// pages/detail/detail.js
Page({
  //初始化数据
  data: {
    // 加载动画显示出来，不隐藏即显示
    hidden: false
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://www.ucaitop.com/douBanServer/FindMovie?id=' + options.id,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Content-Type": "json"
      }, // 设置请求的 header
      success: function (res) {
        console.log(options)
        // success
        console.log(res.data)
        that.setData({
          movieDetail: res.data,
          //将加载动画隐藏掉
          hidden: true
        })
        // 动态修改微信小程序的页面标题
        wx.setNavigationBarTitle({
          title: res.data.movName
        })
      }
    })
  }
})

