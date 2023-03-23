<!--
 * @Descripttion: 
 * @Author: whl
 * @Date: 2023-03-22 16:07:16
 * @LastEditors: whl
 * @LastEditTime: 2023-03-23 16:50:22
-->
<script setup>
  import {getCurrentInstance} from 'vue'
  const {appContext} = getCurrentInstance()
  const globalProxy = appContext.config.globalProperties  
  function alert () {
    globalProxy.$hlAlert({
      title: '审核未通过原因',
      subMessage: '审核未通审核未通审核未通审核未通审核未通',
      isCloseIcon: true,
      cancelBtnClass: 'm-red', // 取消按钮的class
      callback: () => {
        console.log('确定按钮')
      }
    })
  }
  function alert2 () {
    globalProxy.$hlAlert({
      title: '信息提示',
      subMessage: '只展示一个按钮',
      isCloseIcon: true,
      ensureBtnText: '确定', // 确认按钮的文字
      cancelBtnText: '取消', // 取消按钮的文字
      hideCancel: true // true 隐藏取消按钮
    })
  }
  function alert3 () {
    globalProxy.$hlAlert({
      title: '信息提示',
      subMessage: '确定按钮文字修改',
      isCloseIcon: true,
      ensureBtnText: '知道了', // 确认按钮的文字
      cancelBtnText: '取消', // 取消按钮的文字
      hideCancel: true // true 隐藏取消按钮
    })
  }
  function alert4 () {
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
    <button @click="alert">click1</button>
    <button @click="alert2">click2</button>
    <button @click="alert3">click3</button>
    <button @click="alert4">click4</button>
  </div>
</template>

<style lang="scss">
.base-alert .m-red {
  border: 1px solid #536FFF;
  background: transparent;
  color: #536FFF;
  margin-right: 16px;
}
</style>
