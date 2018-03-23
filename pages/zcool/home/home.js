const util = require('../../../utils/util.js')
import { ZPostRequest } from '../../../utils/network.js'

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
  onLoad(options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.getRecommendTemplates()
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
   * 获取推荐模板数据
  */
  getRecommendTemplates() {
    wx.showLoading({
      title: '加载中',
    });
    ZPostRequest({
      url: 'http://test.zweb.zcool.cn/api/recomTemplateList.do',
      success: res => {
        this.setData({templates: res.data ? res.data.map(this.formatTemplate) : []})
      },
      complete: () => {
        wx.hideLoading();
      }
    })
  },

  formatTemplate: template => {
    return {
      ...template,
      template: {
        ...template.template, 
        createTime: util.formatTimeWithoutHour(new Date(template.template.createTime))
      }
    }
  },

  /**
   * 查看模板效果
   */
  handlePreviewTemplate(evt) {
    const template = evt.currentTarget.dataset.template;
    wx.navigateTo({
      url: '../preview/preview?templateId' + template.templateId,
    })
  },

  /**
   * 生成新的项目
   */
  handleCreateProject(evt) {
    const template = evt.currentTarget.dataset.template;
    console.warn('create project', template)
  },
})
