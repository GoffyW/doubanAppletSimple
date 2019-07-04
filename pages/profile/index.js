//index.js
//获取应用实例
var app = getApp()
Page({
  //初始化数据
  data: {
    userInfo: {},
    y_menus: [
      { title: '观影记录' },
      { title: '消息通知' },
      { title: '我的卡券' },
      { title: '吐槽一下' },
    ],
    x_menus: [
      { title: '收藏', icon: '../../images/collection.png' },
      { title: '夜间', icon: '../../images/eve.png' },
      { title: '设置', icon: '../../images/set.png' },
    ],
    skinStyle:""
  },
  
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
       
      })
    })
    that.setData({
      skinStyle: app.globalData.skin
    })
  },
  switchChange: function (e) {
    var that = this
    var style
    //设置全局变量
    if (e.detail.value == true) {
      app.globalData.skin = "dark"
      console.log(app.globalData.skin);
    } else {
      app.globalData.skin = ""
    }
    that.setData({
      skinStyle: app.globalData.skin
    })
    //保存到本地
    wx.setStorage({
      key: "skin",
      data: app.globalData.skin
    })
  }
})
