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
        this.setData({
          goods_info:{
            goods_name:g_info.goods_name,
            goods_price:g_info.goods_price,
            goods_introduce:g_info.goods_introduce
          },
          swip_imgs:res.data.message.pics
        });
    });
  }
})