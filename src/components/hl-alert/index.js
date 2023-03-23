/*
 * @Descripttion: 提示组件
 * @Author: whl
 * @Date: 2023-03-23 15:40:42
 * @LastEditors: whl
 * @LastEditTime: 2023-03-23 15:41:30
 */
import {createVNode, render} from 'vue'
import HlAlert from './hl-alert.vue'

const myAlert = function(options) {
    const container = document.createElement('div')
    const vm = createVNode(
      HlAlert,
      options
    )
    render(vm, container)
    document.body.appendChild(container)
}  
const MyHlAlert = {
  install(app) {
    // 配置此应用
    app.config.globalProperties.$hlAlert = myAlert
  }
}
export default MyHlAlert
