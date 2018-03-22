// components/topic_cell/topic_cell.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    topic: {
      type: Object,
      value: {},
      observer: (newVal, oldVal) => {}
    }
  },

  /**
   * 
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执行
   */
  attached() {
    // 将外部传入的值复制给value，当然也可以直接使用key值
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClickTopic(evt) {
      this.triggerEvent('handleClickTopic', evt)
    },

    handleClickNodeName(evt) {
      this.triggerEvent('handleClickNodeName', evt)
    }
  }
})
