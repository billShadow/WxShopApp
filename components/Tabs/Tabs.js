Component({
  // components/SearchInput/Tabs/Tabs.js
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //定义点击事件
    handleItemTap(e) {
      const {index} = e.currentTarget.dataset;
      
      this.triggerEvent('tabsItemChange', {index})
    }
  }
})
