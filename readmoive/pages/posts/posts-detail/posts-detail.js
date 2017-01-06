// pages/posts/posts-detail/posts-detail.js

var postsData = require("../../../data/posts_data.js");

Page({
  data: {},
  onLoad: function (options) {
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

  onCollectionTap: function (event) {
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
    wx.showToast({
      title: postCollected?'收藏成功':'取消成功',
      icon: 'success',
      duration: 2000
    })


  },
  

  onPlayMusicTap : function(event) {
    console.log("play");
    var url = "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46";
     var  title =  "此时此刻";
     var  coverImg = "../images/music/xuwei.jpg";
    wx.playBackgroundAudio({
      dataUrl: url,
      title: title,
      coverImgUrl: coverImg,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
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