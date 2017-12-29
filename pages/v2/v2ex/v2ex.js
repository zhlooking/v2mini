// pages/v2ex/v2ex.js
const util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    posts: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getV2HotPosts()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 
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
   * 获取V2ex接口数据
   * 
   */
  getV2HotPosts: function () {
    var that = this
    wx.request({
      url: 'https://www.v2ex.com/api/topics/hot.json',
      success: function (res) {
        var data = res.data
        data = data.map(function (item) {
          return {
            ...item, 
            last_modified: util.formatTime(new Date(item.last_modified * 1000)), 
            member: { 
              ...item.member, 
              avatar_large: 'https:' + item.member.avatar_large,
              avatar_normal: 'https:' + item.member.avatar_normal,
              avatar_mini: 'https:' + item.member.avatar_mini
            }
          }
        })
        that.setData({ posts: data })
      }
    })
  },

  /**
   * 点击文章列表项
   */
  handleClickPost: function (e) {
    var post = this.data.posts[e.currentTarget.dataset.index];

    wx.navigateTo({
      url: '../detail/detail?postId=' + post.id,
    })
  },

  /**
   * 点击节点名称
   */
  handleClickNodeName: function (e) {
    var nodeName = e.currentTarget.dataset.nodeName;

    wx.navigateTo({
      url: '../v2node/v2node?name=' + nodeName,
    })
  }
})
