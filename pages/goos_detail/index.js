// pages/goos_detail/index.js
import {request} from "../../request/index.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swip_imgs:[],
    goods_info:[]
  },
  goodsInfo:{},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {goods_id} = options;
    this.getGoodsDetail(goods_id);
  },
  getGoodsDetail(goods_id) {
    request({url:"goods/detail?goods_id="+goods_id})
    .then(res=>{
      console.log(res);
      const g_info = res.data.message;
      this.goodsInfo = g_info;
        this.setData({
          goods_info:{
            goods_name:g_info.goods_name,
            goods_price:g_info.goods_price,
            goods_introduce:g_info.goods_introduce
          },
          swip_imgs:res.data.message.pics
        });
    });
  },
  handlePrevewImage(e){
    const current_img = e.currentTarget.dataset.url;
    const urls = this.goodsInfo.pics.map(v=>v.pics_mid);
    wx.previewImage({
      current: current_img, // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    })
  },
  handleAddCar(){
    let cart = wx.getStorageSync('cart') || [];
    let index = cart.findIndex(v=>v.goods_id === this.goodsInfo.goods_id);
    if (index === -1) {
        this.goodsInfo.num = 1;
        cart.push(this.goodsInfo)
    } else {
        cart[index].num++;
    }
    wx.setStorageSync('cart', cart);
  }
})