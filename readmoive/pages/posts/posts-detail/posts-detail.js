// pages/posts/posts-detail/posts-detail.js

var postsData = require("../../../data/posts_data.js");

Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var postId = options.id;
    this.data.currentPostId = postId;
    var postData = postsData.postDataList[postId];

    this.setData({
      detailModel: postData,
    });

    var posts_collected_key = "posts_collected_key";


    var postsCollected = wx.getStorageSync(posts_collected_key);
    if (postsCollected) {
        var postCollected = postsCollected[postId];
        this.setData({
          collected: postCollected,
        });
    } else {
      postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync(posts_collected_key, postsCollected);
    }
  },

  onCollectionTap: function(event) {
    var posts_collected_key = "posts_collected_key";
    var postId = this.data.currentPostId;
    var postsCollected = wx.getStorageSync(posts_collected_key);
    var postCollected = postsCollected[postId];
    postCollected = !postCollected;
    postsCollected[postId] = postCollected;
    wx.setStorageSync(posts_collected_key, postsCollected);
    this.setData({
      collected: postCollected,
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