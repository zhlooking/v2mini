
// pages/zcool/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    templates: []
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
    this.getRecommendTemplates()
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
   * 获取推荐模板数据
  */
  getRecommendTemplates: function () {
    var that = this;
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: 'http://test.zweb.zcool.cn/api/recomTemplateList.do',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        that.setData({templates: res.data ? res.data : []})
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  },

  /**
   * 查看模板效果
   */
  handlePreviewTemplate: function (evt) {
    const template = evt.currentTarget.dataset.template;
    wx.navigateTo({
      url: '../preview/preview?templateId' + template.templateId,
    })
  },

  /**
   * 生成新的项目
   */
  handleCreateProject: function (evt) {
    const template = evt.currentTarget.dataset.template;
    console.log('-------------------> create project', template)
  },
})
