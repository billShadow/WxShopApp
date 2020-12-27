// pages/category/index.js

import {request} from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList:[],
    rightContentList:[],
    currentIndex:0,
    scrollTop:0
  },
  Cates:[],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 小程序获取本地存储的数据
    const Cates = wx.getStorageSync('cates');
    if (!Cates) {
      this.getCates();
    } else {
      if (Date.now() - Cates.time > 1000*20) {
        this.getCates();
      } else {
        //缓存没有过期，可以使用缓存的老数据、
        this.Cates = Cates.data;
        let leftMenuList = this.Cates.map(v=>v.cat_name);
        let rightContentList = this.Cates[0].children;
        this.setData({
          leftMenuList,
          rightContentList
        })
      }
    }
  },
  getCates(){
    request({
      url:"categories"
    })
    .then(res => {
      this.Cates = res.data.message;

      wx.setStorageSync('cates', {time:Date.now(), data:this.Cates});
      //构造左侧的大菜单数据
      let leftMenuList = this.Cates.map(v=>v.cat_name);
      //构建右侧的小分类数据
      let rightContentList = this.Cates[0].children;

      this.setData({
        leftMenuList,
        rightContentList
      })

    })
  },
  handleItemTap(e) {
    console.log(e)
    const {index} = e.currentTarget.dataset;
    //构建右侧的小分类数据
    let rightContentList = this.Cates[index].children;

    this.setData({
      rightContentList,
      currentIndex:index,
      scrollTop:0
    })
  }
})