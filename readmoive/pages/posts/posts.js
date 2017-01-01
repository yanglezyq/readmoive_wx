// pages/posts/posts.js

var postData = require("../../data/posts_data.js");

Page({
  data: {
    condition: true,
  },
  onItemTap: function (event) {
    // console.log("onItemTap" + event.currentTarget.dataset.postid);
    wx.navigateTo({
      url: 'posts-detail/posts-detail?id='+event.currentTarget.dataset.postid ,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },


  procss: function () {
    console.log("process");
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    console.log("postdata: " + postData.postDataList);

    // this.data.posts_key = postData.localData;
    this.setData({
      posts_key: postData.postDataList
    });
  },




  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})