Page({
  onReady() {
    const cover = 'https://img.zcool.cn/community/018d915aa8ba95a80121246d62d7e6.jpeg@260w_195h_1c_1e_1o_100sh.jpg'
    const face = "https://img.zcool.cn/community/045ba357b5443c000001ba90cda892.jpg@80w_80h_1c_1e_1o_100sh_80-1ci.png"
    const qr = "https://img.zcool.cn/community/07d8255aa8baafa8012d1f3bb4c322.jpg"
    const bg = "../../images/01_bg.png"

    Promise.all([this.getImageTempInfo(cover), this.getImageTempInfo(qr), this.getImageTempInfo(face)])
    .then(([cover, qr, face]) => {
      this.drawImage(bg, qr, cover, face)
    })
  },

  getImageTempInfo(src) {
    return new Promise((resolve, reject) => {
      wx.getImageInfo({
        src,
        success: res => {
          console.log(res);
          const { path } = res
          if (path) {
            resolve(path)
          } else {
            reject(res.errMsg)
          }
        }
      })
    })
  },

  // 所有的canvas属性以及Math.sin,Math.cos()等涉及角度的参数都是用弧度表示
  drawImage(bg, qr, cover, face) {
    console.log('---> drawImage', { bg, qr, cover, face })
    const ctx = wx.createCanvasContext("myCanvas", this);
    ctx.drawImage(bg, 0, 0, 375, 574);

    ctx.setTextBaseline("top");
    ctx.font = "normal normal 24px PingFangSC-Semibold";
    ctx.fillText("我就是我不一样的烟火我就", 30, 309);
    ctx.font = "normal bold 24px Arial Narrow";
    ctx.fillText("是我不一样的烟火", 30, 309 + 34);

    ctx.font = "normal normal 14px cursive";
    ctx.fillText("秋苹", 87, 402);
    ctx.fillText("北京 | 设计爱好者", 87, 427);
    ctx.drawImage(cover, 34, 64, 307, 221);
    ctx.drawImage(face, 30, 402, 42, 42);
    ctx.drawImage(qr, 285, 494, 60, 60);
    ctx.draw(true, () => {
      // toFile()
    });

    function toFile() {
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: '375rpx',
        height: 550,
        destWidth: 375,
        destHeight: 580,
        canvasId: 'myCanvas',
        success: res => {
          const tempFilePath = res.tempFilePath;
          console.log(tempFilePath);
          wx.saveImageToPhotosAlbum({
            filePath: tempFilePath,
            success(res) {
              console.log(res);
            }
          })
        }
      });
    }
  }
})
