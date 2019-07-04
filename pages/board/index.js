//index.js
//获取应用实例
var app = getApp()
Page({
  data: {

  },
  //事件处理函数
  onLoad: function () {
    var that = this;

    // 轮播图请求
    wx.request({
      url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=coming',
      data: {},
      method: 'GET',
      // 设置请求的 header
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        console.log(res.data)
        var sliderData = res.data.result;
        console.log(sliderData);
        that.setData({
          sliderData: sliderData
        })
        console.log(sliderData);
      }
    }),


    // 正在上映的请求
    wx.request({
      url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=theaters',
      data: {},
      method: 'GET',
      // 设置请求的 header
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        console.log(res.data)
        var moviesOn = res.data.result;
        console.log(moviesOn);
        // 打印的是对应电影的id值
        console.log(moviesOn[0].id);
        that.setData({
          // movieTitle:res.data.title,
          moviesOn: moviesOn
        })
        console.log(moviesOn);
      }
    }),

    // 即将上映的请求
    wx.request({
      url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=coming',
      data: {},
      method: 'GET',
      // 设置请求的 header
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        console.log(res.data)
        var moviesComing = res.data.result;
        console.log(moviesComing);
        that.setData({
          moviesComing: moviesComing
        })
        console.log(moviesComing);
      }
    }),

    //top250
    wx.request({
      url: 'https://www.ucaitop.com/douBanServer/GetMovies?type=top',
      data: {},
      method: 'GET',
      // 设置请求的 header
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        console.log(res.data)
        var moviesBest = res.data.result;
        console.log(moviesBest);
        that.setData({
          // movieTitle:res.data.title,
          moviesBest: moviesBest
        })
        console.log(moviesBest);
      }
    })

  }

})
