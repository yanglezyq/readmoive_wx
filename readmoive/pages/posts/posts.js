// pages/posts/posts.js
Page({
  data:{
    condition: true,
  },
  procss: function() {
    console.log("process");
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

    var post_contents = [
      {
         date: "Sep 18 2016",
        title: "正式霞飞卸妆",
        post_img: "/images/post/crab.png",
        content: "哈哈哈哈嘎嘎嘎卧槽啊哈哈哈哈哈哈卡萨减肥的；离开家阿莱克斯觉得烦sdkfja;sldkfjsdfasdfasdf",
        viem_num: "23",
        collect_num: "78",
        author_img: "/images/avatar/1.png",
      },
      {
         date: "Jap 01 2017",
        title: "正式霞飞卸妆",
        post_img: "/images/post/crab.png",
        content: "哈哈哈哈嘎嘎嘎卧槽啊哈哈哈哈哈哈卡萨减肥的；离开家阿莱克斯觉得烦sdkfja;sldkfjsdfasdfasdf",
        viem_num: "23",
        collect_num: "78",
        author_img: "/images/avatar/1.png",
      },
       {
         date: "Jap 01 2017",
        title: "正式霞飞卸妆",
        post_img: "/images/post/crab.png",
        content: "哈哈哈哈嘎嘎嘎卧槽啊哈哈哈哈哈哈卡萨减肥的；离开家阿莱克斯觉得烦sdkfja;sldkfjsdfasdfasdf",
        viem_num: "23",
        collect_num: "78",
        author_img: "/images/avatar/1.png",
      },
       {
         date: "Jap 01 2017",
        title: "正式霞飞卸妆",
        post_img: "/images/post/crab.png",
        content: "哈哈哈哈嘎嘎嘎卧槽啊哈哈哈哈哈哈卡萨减肥的；离开家阿莱克斯觉得烦sdkfja;sldkfjsdfasdfasdf",
        viem_num: "23",
        collect_num: "78",
        author_img: "/images/avatar/1.png",
      },
       {
         date: "Jap 01 2017",
        title: "正式霞飞卸妆",
        post_img: "/images/post/crab.png",
        content: "哈哈哈哈嘎嘎嘎卧槽啊哈哈哈哈哈哈卡萨减肥的；离开家阿莱克斯觉得烦sdkfja;sldkfjsdfasdfasdf",
        viem_num: "23",
        collect_num: "78",
        author_img: "/images/avatar/1.png",
      },
       {
         date: "Jap 01 2017",
        title: "正式霞飞卸妆",
        post_img: "/images/post/crab.png",
        content: "哈哈哈哈嘎嘎嘎卧槽啊哈哈哈哈哈哈卡萨减肥的；离开家阿莱克斯觉得烦sdkfja;sldkfjsdfasdfasdf",
        viem_num: "23",
        collect_num: "78",
        author_img: "/images/avatar/1.png",
      },
       {
         date: "Jap 01 2017",
        title: "正式霞飞卸妆",
        post_img: "/images/post/crab.png",
        content: "哈哈哈哈嘎嘎嘎卧槽啊哈哈哈哈哈哈卡萨减肥的；离开家阿莱克斯觉得烦sdkfja;sldkfjsdfasdfasdf",
        viem_num: "23",
        collect_num: "78",
        author_img: "/images/avatar/1.png",
      },

    ];


    this.setData({
      posts_key: post_contents
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