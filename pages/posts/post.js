var postData=require("../../data/post_data.js")
Page({
  data: {
    
  },
  onLoad: function (options) {
    // Do some initialize when page load.
  
    this.setData({
      post_key: postData.postList
    });

  },
  
})