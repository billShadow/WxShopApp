// pages/cart/index.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  handleChooseAddress: function () {
    // wx.chooseAddress({
    //   success: (result)=>{
    //     console.log(result);
    //   },
    //   fail: ()=>{},
    //   complete: ()=>{}
    // });

    wx.getSetting({
      success: (result)=>{
        console.log(result);
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  }
})