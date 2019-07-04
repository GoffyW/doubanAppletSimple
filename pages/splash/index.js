//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this
    wx.request({
      url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=coming',
      data: {},
      method: 'GET',
      header: {
        // 获取的内容类型：json数据
        "Content-Type": "json"
      },
      success: function (res) {
        console.log(res.data);
        var moviesComing = res.data.result;
        //slice() 截取数据,参数一：数组的起始索引；参数二：数组的结束索引
        var moviesC = moviesComing.slice(4, 6);
        console.log(moviesC);
        that.setData({
          movies: moviesC
        })
      }
    })
  },
  // 在onLoad  函数后面，处理按钮的点击事件
  handleStart: function (e) {
    //跳转到tabBar页面，并且关闭其他非tabBar页面
    wx.switchTab({
      url: '../board/index',
    })
  }
})