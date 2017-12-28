// pages/v2detail/v2detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postId: '',
    replies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.postId;
    this.setData({ postId: postId })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getAllRepliesWithTopicId();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('----> onPullDownRefresh');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('----> onReachBottom');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 获取帖子下的所有评论
   */
  getAllRepliesWithTopicId: function () {
    var that = this
    wx.request({
      url: 'https://www.v2ex.com/api/replies/show.json?topic_id=' + this.data.postId,
      success: function (res) {
        var replies = res.data;
        console.log('---> replies', res, replies)
        that.setData({ replies: replies })
      }
    })
  }
})
