# hl-alert
基于vue3.x开发的alert插件

## 安装插件

```
npm install --save hl-alert
```

## 引入并注册插件
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import HlAlert from 'hl-alert'

const app = createApp(App)
app.use(HlAlert)
app.mount('#app')
```

## 基本用法示例
```javascript
<script setup>
  import {getCurrentInstance} from 'vue'
  const {appContext} = getCurrentInstance()
  const globalProxy = appContext.config.globalProperties  
  function alert () {
    globalProxy.$hlAlert({
      subMessage: '审核未通审核未通审核未通审核未通审核未通',
      isCloseIcon: true
    })
  }
  function alert2 () {
    globalProxy.$hlAlert({
      title: '信息提示',
      subMessage: '<p style="text-align: left;color: red;">审核未通审核未通审核未通审核未通审核未通</p>',
      isCloseIcon: true,
      cancelBtnClass: 'm-red', // 取消按钮的class
      callback: () => {
        console.log('确定按钮')
      }
    })
  }
</script>

<template>
  <div>
    <button @click="alert">click</button>
  </div>
</template>
```
# API
| 属性 | 类型 | 说明 
| :----  | :---- | :----
| title | String | 默认值：'信息提示', 提示窗title
| message | String | 默认值：'', 提示信息
| subMessage | String | 默认值：'', 提示信息
| isCloseIcon | Boolean | 默认值：false, 不展示右上角关闭按钮， true为展示右上角关闭按钮
| ensureBtnText | String | 默认值：‘确认’，确认按钮文字
| cancelBtnText | String | 默认值：‘取消’，取消按钮文字
| hideCancel | Boolean | 默认值：false,展示取消按钮，true时隐藏 取消按钮
| closeFromWindowClick | Boolean | 默认值：true,点击页面的其它地方弹窗会关闭，否则不关闭 
| cancelBtnClass | String | 取消按钮样式类名，用来修改取消按钮的样式
| callback | Function | 确定按钮回调函数 
| callbackCancel | Function | 取消按钮回调函数 
