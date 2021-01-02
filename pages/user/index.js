// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userInfo = wx.getStorageSync('userinfo');
    this.setData({userInfo});
  },
  handleGetUserInfo(e){
    const {userInfo} = e.detail;
    wx.setStorageSync('userinfo', userInfo);
    this.setData({userInfo})
    this.onLoad()
  }
  
})