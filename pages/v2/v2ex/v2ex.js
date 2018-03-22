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
  onLoad(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.getV2HotPosts()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 获取V2ex接口数据
   */
  getV2HotPosts() {
    wx.request({
      url: 'https://www.v2ex.com/api/topics/hot.json',
      success: res => {
        const data = res.data.map(item => {
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
        this.setData({ posts: data })
      }
    })
  },

  /**
   * 点击文章列表项
   */
  handleClickPost(e) {
    const post = this.data.posts[e.currentTarget.dataset.index];

    wx.navigateTo({
      url: '../detail/detail?postId=' + post.id,
    })
  },

  /**
   * 点击节点名称
   */
  handleClickNodeName(e) {
    const nodeName = e.currentTarget.dataset.nodeName;

    wx.navigateTo({
      url: '../v2node/v2node?name=' + nodeName,
    })
  }
})
