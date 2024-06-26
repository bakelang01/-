// pages/test/test.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
    
//   },
  

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad(options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady() {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow() {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide() {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload() {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh() {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom() {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage() {

//   }
// })

Page({
  data: {
    min: 0,
    max: 100,
    count: 1,
    allowDuplicates: false,
    filter: [],
    numbers: [],
    resultString: ''
  },

  onMinInput(e) {
    this.setData({ min: parseInt(e.detail.value) });
  },

  onMaxInput(e) {
    this.setData({ max: parseInt(e.detail.value) });
  },

  onCountInput(e) {
    this.setData({ count: parseInt(e.detail.value) });
  },

  onAllowDuplicatesChange(e) {
    // console.log(e.detail.value)
    this.setData({ allowDuplicates: e.detail.value.length > 0});
  },

  onFilterInput(e) {
    const filter = e.detail.value.split(',').map(Number);
    this.setData({ filter });
  },

  generateNumbers() {
    const { min, max, count, allowDuplicates, filter } = this.data;
    let numbers = [];

    // 检验合法性
    if(min>=max || count<=0){
      wx.showModal({
        title: '输入不合法',
        content: `输入的条件有误:`,
        showCancel: false,
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定');
          }
        }
      });
      return 0;
    }

    if (allowDuplicates) {
      while (numbers.length < count) {
        const num = this.randomNumber(min, max);
        if (!filter.includes(num)) {
          numbers.push(num);
        }
      }
    } else {
      const range = Array.from({ length: max - min + 1 }, (_, i) => i + min).filter(num => !filter.includes(num));
      for (let i = 0; i < count; i++) {
        if (range.length === 0) break;
        const index = Math.floor(Math.random() * range.length);
        numbers.push(range[index]);
        range.splice(index, 1);
      }
    }

    this.setData({ numbers });

    const resultString = numbers.join('  ');
    this.setData({ resultString });

  },

  copyToClipboard() {
    const { resultString } = this.data;
    wx.setClipboardData({
      data: resultString,
      success() {
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 2000
        });
      },
      fail() {
        wx.showToast({
          title: '复制失败',
          icon: 'none',
          duration: 2000
        });
      }
    })
  },

  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
})
