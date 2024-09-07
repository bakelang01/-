// pages/gongde/gongde.js
// const audioContext = wx.createInnerAudioContext( {useWebAudioImplement:true });

Page({

  /**
   * 页面的初始数据
   * 
   */
  data: {
    isActive: false,
    showText: false,
    gongde_count:0,
  },

  // 转发朋友功能
  onShareAppMessage: function () {
    const query = wx.createSelectorQuery()
    query.select('#myCanvas').boundingClientRect()
    query.exec(function (res) {
      console.log(res)
    })
    return {
      title: 'blacklang_tool',
      path: '/pages/first/first',
      imageUrl: '../img/木鱼.svg',
      success: function (res) {
        console.log('分享成功')
      },
      fail: function (res) {
        console.log('分享失败')
      }
    }
  },

  // 朋友圈分享功能
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  onShareTimeline: function () {
    return {
      title: 'blacklang_tool',
      imageUrl: '../img/木鱼.svg',
      query: 'key=value',
      success: function (res) {
        console.log('分享成功')
      },
      fail: function (res) {
        console.log('分享失败')
      }
    }
  },

  onLoad() {
    // 关闭音效效果
    // audioContext.src = 'https://downsc.chinaz.net/files/download/sound1/201212/2430.wav'; // 指定音效文件路径

    // console.log('Audio context created:', this.audioContext);

    // audioContext.onError((res) => {
    //   console.error('音频播放错误:', res.errMsg);
    //   console.error('错误代码:', res.errCode);
    // });
  },

  animateImage() {
    this.setData({ isActive: false }); // 先移除动画类名

     // 触觉反馈：设备震动
     wx.vibrateShort({type:'heavy'});

     this.setData({gongde_count:this.data.gongde_count+1});

    setTimeout(() => {
      this.setData({ isActive: true }); // 延迟后再添加动画类名
      // console.log(this.audioContext)

      // 暂时关闭音效效果
      // if (audioContext) {
      //   audioContext.play(); // 播放音效
      // } else {
      //   console.error('Audio context is not defined');
      // }

      // 显示“功德+1”字样
      this.setData({ showText: true });

      // 设置定时器在1秒后隐藏“功德+1”字样
      setTimeout(() => {
        this.setData({ showText: false });
      }, 1000); // 1秒后隐藏
    }
    , 50); // 这里的延迟时间可以根据需要调整，确保动画能够重新触发
  },

  onUnload() {
    // audioContext.destroy(); // 页面卸载时销毁音频上下文
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})