// pages/v2detail/v2detail.js
const util = require('../../../utils/util.js')
import { ZGetRequest } from  '../../../utils/network.js'

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
  onLoad(options) {
    const postId = options.postId;
    this.setData({ postId })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.getAllRepliesWithTopicId();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
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
    console.log('-- onPullDownRefresh');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('-- onReachBottom');
  },

  /**
   * 获取帖子下的所有评论
   */
  getAllRepliesWithTopicId() {
    ZGetRequest({
      url: `https://www.v2ex.com/api/replies/show.json?topic_id=${this.data.postId}`,
      success: res => {
        this.setData({ replies: res.data.map(this.formatReply) })
      }
    })
  },

  formatReply(reply) {
    return {
      ...reply,
      member: {
        ...reply.member,
        last_modified: util.formatTime(new Date(reply.last_modified * 1000)),
        avatar_large: 'https:' + reply.member.avatar_large,
        avatar_normal: 'https:' + reply.member.avatar_normal,
        avatar_mini: 'https:' + reply.member.avatar_mini,
      }
    }
  },

  /**
   * 点击评论项目
   */
  handleClickReply() {
    console.warn('handleClickReply method not implemented')
  },

  /**
   * 点击评论中用户头像
   */
  handleClickUserAvatar(evt) {
    const user = evt.currentTarget.dataset.user;

    wx.navigateTo({
      url: '../v2user/v2user?id=' + user.id,
    })
  }
})
