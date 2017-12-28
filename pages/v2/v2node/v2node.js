// pages/v2/v2node/v2node.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    nodes: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('v2node ---------------> v2node onLoad', options)
    this.setData({name: options.name})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getAllV2Nodes()
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
   * 获取所有的v2ex节点
   */
  getAllV2Nodes: function () {
    var that = this;
    wx.request({
      url: 'https://www.v2ex.com/api/nodes/all.json',
      success: function (res) {
        console.log('------------_> all v2nodes', res.data)
        that.setData({ nodes: res.data})
      }
    })
  },

  /**
   * 点击跳转到相应的node节点
   */
  handleClickNode: function (e) {
    var nodeIndex = e.currentTarget.dataset.index;
    var node = this.data.nodes[nodeIndex]
    wx.navigateTo({
      url: '../node_detail/node_detail?name=' + node.name,
    })
  }
})