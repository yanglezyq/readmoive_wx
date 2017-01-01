// pages/posts/posts.js

var postData = require("../../data/posts_data.js");

Page({
  data: {
    condition: true,
  },
  procss: function () {
    console.log("process");
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

   console.log("postdata: " + postData);

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