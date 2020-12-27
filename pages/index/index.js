// 引入promis的方法
import {request} from "../../request/index.js"

//Page Object
Page({
  data: {
    swiperList:[],
    catesList:[],
    floorList:[]
  },
  //options(Object)
  onLoad: function(options){
    // 1 发送一步请求获取轮播图数据 优化多层嵌套request请求  用promise来解决这个问题
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result)=>{
    //     console.log(result)
    //     this.setData(
    //       {"swiperList":result.data.message}
    //     )
    //   }
    // });
    this.getSwiperList();
    this.getcatesList();
    this.getflootList();
    
  },
  getSwiperList() {
    request({"url":"home/swiperdata"})
    .then(reuslt => {
      this.setData({swiperList:reuslt.data.message})
    })
  },
  getcatesList() {
    request({"url":"home/catitems"})
    .then(reuslt => {
      this.setData({catesList:reuslt.data.message})
    })
  },
  getflootList() {
    request({"url":"home/floordata"})
    .then(reuslt => {
      this.setData({floorList:reuslt.data.message})
    })
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});