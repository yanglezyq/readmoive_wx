// pages/posts/posts-detail/posts-detail.js

var postsData = require("../../../data/posts_data.js");

Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var postData = postsData.postDataList[options.id];

    this.setData({
      detailModel: postData,
    });


  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})