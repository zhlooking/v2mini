// ErrorUploader Singleton
// 上传错误信息，及当前设备、存储信息
import { deployENV, wxErrorEventName } from '../config.js'
let errUploaderInstance = null

export default class ErrorUploader {
  constructor() {
    if (!errUploaderInstance) {
      errUploaderInstance = this;
    }

    this.deviceInfo = {}
    return errUploaderInstance;
  }

  init() {
    // 获取用户设备、微信版本信息
    wx.getSystemInfo({
      success: res => {
        this.deviceInfo.device = res.model
        this.deviceInfo.system = res.system
        this.deviceInfo.WXversion = res.version
        this.deviceInfo.SDKversion = res.SDKVersion
      },
    })

    // 获取用户当前网络信息
    wx.getNetworkType({
      success: res => {
        this.deviceInfo.network = res.networkType
      }
    });
  }

  static uploadInfo({ eventName = wxErrorEventName, customData = {} }) {
    // 获取storage中[key, value]信息
    let storageInfo = {}
    try {
      storageInfo = wx.getStorageInfoSync()
      const { keys } = storageInfo
      const values = keys.map(key => {
        try {
          return wx.getStorageSync(key)
        } catch (e) {
          return `${key}_err`
        }
      })
      storageInfo.values = values
    } catch (e) {
      storageInfo.error = e
    }

    const { deviceInfo } = errUploaderInstance
    const data = {
      device_info: JSON.stringify(deviceInfo),
      storage_info: JSON.stringify(storageInfo),
      custom_data: JSON.stringify(customData),
    }
    // 通过API上传 设置文档 https://goo.gl/h7wDyk
    // 只在生产环境报错
    if (deployENV === 'prod') {
      wx.reportAnalytics(eventName, data)
    } else {
      wx.showToast({
        title: '发生错误，请查看console',
        duration: 2000
      })
      console.error(eventName, data)
    }
  }
}
