// pages/first/first.js
// index.js
Page({
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
      imageUrl: '../img/疯狂.svg',
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
      imageUrl: '../img/疯狂.svg',
      query: 'key=value',
      success: function (res) {
        console.log('分享成功')
      },
      fail: function (res) {
        console.log('分享失败')
      }
    }
  }

})