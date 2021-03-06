Page({
  onReady: function() {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  statechange(e) {
    console.log('live-player code:', e.detail.code)
  },
  error(e) {
    console.error('live-player error:', e.detail.errMsg)
  },
  videoErrorCallback: function(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  }
})

// 香港卫视        rtmp://live.hkstv.hk.lxdns.com/live/hks
// 香港财经        rtmp://202.69.69.180:443/webcast/bshdlive-pc
// 韩国GoodTV     rtmp://mobliestream.c3tv.com:554/live/goodtv.sdp
// 韩国朝鲜日报,   rtmp://live.chosun.gscdn.com/live/tvchosun1.stream
// 美国1,         rtmp://ns8.indexforce.com/home/mystream
// 美国2,         rtmp://media3.scctv.net/live/scctv_800
// 美国中文电视,   rtmp://media3.sinovision.net:1935/live/livestream
// 湖南卫视,      rtmp://58.200.131.2:1935/livetv/hunantv
