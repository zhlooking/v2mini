// pages/v2/node_detail/node_detail.js
import { ZGetRequest } from '../../../utils/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    topics: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { name } = options;
    this.getAllNodeTopics(name)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.showLoading({
      title: '加载中',
    })
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
  
  },

  /**
   * 获取节点下的所有主题
   */
  getAllNodeTopics(name) {
    ZGetRequest({
      url: `https://www.v2ex.com/api/topics/show.json?node_name=${name}`,
      success: res => {
        wx.setNavigationBarTitle({ title: name })
        wx.hideLoading()
        this.setData({ topics: res.data, name, loading: false })
      }
    })
  },

  /**
   * 点击主题列表项
   */
  handleClickTopic(e) {
    const post = this.data.topics[e.currentTarget.dataset.index];
    debugger

    wx.navigateTo({
      url: `../detail/detail?postId=${post.id}`,
    })
  },
})
