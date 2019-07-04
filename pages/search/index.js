//index.js
//获取应用实例
var app = getApp()
Page({
  /*页面的初始数据*/
  data: {
    page: 1,
    size: 20,
    subtitle: '请在此输入搜索内容',
    movies: [],
    search: '',
    loading: false,
    hasMore: false
  },
  // 处理搜索框执行搜索内容的函数
  handleSearch: function handleSearch(e) {
    var that = this;
    this.inputValue = e.detail.value;
    //在控制台上观察效果，点击回车之后能够获取到数据
    console.log(this.inputValue);
    // 发送请求，调用豆瓣的接口，获取数据
    wx.request({
      url: 'https://www.ucaitop.com/api/v2/movie/search?q='+this.inputValue,

      data: {},
      method: 'GET',
      header: {
        "Content-Type": "json"
      }, // 设置请求的 header
        
      success: function (res) {
        console.log(res)
        // 打印请求到的数据
        console.log(res.data);
        var data = res.data.subjects;
        // 如果存在数据，则设置数据
        if (data.length) {
          that.setData({
            movies: data,
            // subtitle: data.title,
            loading: false
          })
        } else {//否则传入空
          that.setData({
            hasMore: false,
            loading: false
          });
        }
      }
    })
  }
})
