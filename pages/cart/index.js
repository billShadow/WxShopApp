// pages/cart/index.js
import {chooseAddress,openSetting,getSetting} from "../../utils/asyncWx.js";

Page({
  data: {

  },
  onLoad: function (options) {

  },
  
  handleChooseAddress: function () {
    try {
      const address = chooseAddress()
      wx.setStorageSync('address', address);
    } catch (error) {
      openSetting();
    }
  }
})