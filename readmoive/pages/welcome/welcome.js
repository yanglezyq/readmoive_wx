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
    // console.log("onTap");
  },
  onViewTap: function() {
    // console.log("onViewTap");
  },


  onUnload: function() {
    console.log("onUnload")
  },

  onHide: function() {
    console.log("onHide");
  },
})