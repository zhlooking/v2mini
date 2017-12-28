// pages/v2/node_detail/node_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    topics: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var nodeName = options.name;
    this.setData({name: nodeName})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getAllNodeTopics()
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 获取节点下的所有主题
   */
  getAllNodeTopics: function () {
    var that = this
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?node_name=' + this.data.name,
      success: function (res) {
        that.setData({topics: res.data})
      }
    })
  },


  /**
   * 点击主题列表项
   */
  handleClickTopic: function (e) {
    var post = this.data.topics[e.currentTarget.dataset.index];
    console.log('-----------> topic', post)
    wx.navigateTo({
      url: '../detail/detail?postId=' + post.id,
    })
  },

})