// pages/goods_list/index.js

import {request} from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        value:"综合",
        isActive:true
      },
      {
        id:1,
        value:"销量",
        isActive:false
      },
      {
        id:2,
        value:"价格",
        isActive:false
      },
    ],
    goodsList:[]
  },
  queryParams:{
    query:"",
    cid:"",
    pagenum:1,
    pagesize:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.queryParams.cid = options.cid;
   
    this.getGoodslist();

  },
  getGoodslist(){
    request({
      url:"goods/search",
      data:this.queryParams
    })
    .then(res => {
      this.setData({
        goodsList:[...this.data.goodsList, ...res.data.message.goods]
      })
      wx.stopPullDownRefresh()
      

    })
  },
  handleTabsItemChange(e){
    // 获取呗点击的标题
    const {index} = e.detail;
    let {tabs} = this.data;

    //tabs.forEach((v, i)=> i===index?v.isActive=true:v.isActive=false);
    tabs.forEach((v,i) => {
      i === index ? v.isActive=true:v.isActive=false
    });
    this.setData({tabs})
  },
  onReachBottom(){
    this.queryParams.pagenum++;
    this.getGoodslist();
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      goodsList:[]
    })
    this.queryParams.pagenum=1
    this.getGoodslist()
  },
})