// pages/posts/posts-detail/posts-detail.js

var postsData = require("../../../data/posts_data.js");
var app = getApp();

Page({
  data: {
    isPlayingMusic: false,
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var postId = options.id;
    this.data.currentPostId = postId;
    var postData = postsData.postDataList[postId];

    this.setData({
      detailModel: postData,
    });

    var posts_collected_key = "posts_collected_key";

    //  初始化收藏信息字典
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

    // 当再次进入页面时，需要根据音乐是否正在播放，来正确显示播放按钮
    if(app.globalData.g_isPlayingMusic && 
    app.globalData.g_isPlayingMusicPostId === postId) {
      this.setData({
        isPlayingMusic: true,
      });
    }


  },

  // 收藏操作
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
      title: postCollected ? '收藏成功' : '取消成功',
      icon: 'success',
      duration: 2000
    })


  },

  // 播放音乐
  onPlayMusicTap: function (event) {
    // var url = "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46";
    // var title = "此时此刻";
    // var coverImg = "../images/music/xuwei.jpg";


    var postId = this.data.currentPostId;
    var postData = postsData.postDataList[postId];

    var musicVO = postData.music;
    var _this = this;
    if (!_this.data.isPlayingMusic) {
      wx.playBackgroundAudio({
        dataUrl: musicVO.url,
        title: musicVO.title,
        coverImgUrl: musicVO.coverImg,
        success: function (res) {
          // success
          _this.setData({
            isPlayingMusic: true,
          });
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
          wx.onBackgroundAudioPause(function (event) {
            _this.setData({
              isPlayingMusic: false,
            });
            app.globalData.g_isPlayingMusic = false;
            app.globalData.g_isPlayingMusicPostId = null;
          });

          wx.onBackgroundAudioPlay(function (event) {
            _this.setData({
              isPlayingMusic: true,
            });
            app.globalData.g_isPlayingMusic = true;
            app.globalData.g_isPlayingMusicPostId = postId;
          })
        }
      });

    } else {
      wx.pauseBackgroundAudio({
        success: function (res) {
          // success
        },
        fail: function () {
          // failï
        },
        complete: function () {
          // complete
        }
      });
      this.setData({
        isPlayingMusic: false,
      });
    }

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