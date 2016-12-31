// pages/welcome/welcome.js
Page({
  onTap: function() {
    wx.redirectTo({
      url: '../posts/posts',
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


  onUnload: function() {
    console.log("onUnload")
  },

  onHide: function() {
    console.log("onHide");
  },
})