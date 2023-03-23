<!--
 * @Descripttion: 弹窗全局组件，可在该组件上扩展
 * 参数：{
      title: '信息提示',
      message: '是否移出该成员？',
      subMessage: '一经确认无法撤回！',
      isCloseIcon: true,
      ensureBtnText: '确认', // 确认按钮的文字
      cancelBtnText: '取消', // 取消按钮的文字
      hideCancel: false, // true 隐藏取消按钮
      cancelBtnClass: '' // 取消按钮的class
    }
 * @Author: whl
 * @Date: 2023-03-23 15:40:42
 * @LastEditors: whl
 * @LastEditTime: 2023-03-23 15:41:53
-->

<template>
  <div class="base-alert" ref="hlAlert">
    <div class="base-alert-bg"></div>
    <div class="m-pop-content">
      <img src="~@/assets/close.png" alt="" class="m-pop-close" v-if="isCloseIcon" @click="handleCancel"/>
      <div class="m-pop-title" v-html="title" v-if="title"></div>
      <div class="m-pop-detail">
        <div v-html="message" v-if="message" class="m-pop-message"></div>
        <div v-html="subMessage" v-if="subMessage" class="m-pop-submessage"></div>
      </div>
      <div class="g-row-flex-right g-btn-group">
        <button :class="['u-base-pop-cancel', cancelBtnClass]" @click="handleCancel" v-if="!hideCancel">{{cancelBtnText}}</button>
        <button class="u-base-pop-create" @click="handleOk">{{ensureBtnText}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
  name: 'HlAlert',
  props: {
    title: {
      type: String,
      default: '信息提示',
    },
    message: {
      type: String,
      default: '',
    },
    subMessage: {
      type: String,
      default: '',
    },
    cancelBtnClass: {
      type: String,
      default: '',
    },
    ensureBtnText: {
      type: String,
      default: '确定',
    },
    cancelBtnText: {
      type: String,
      default: '取消',
    },
    isCloseIcon: {
      type: Boolean,
      default: false,
    },
    callback: {
      type: Function,
    },
    callbackCancel: {
      type: Function,
    },
    hideCancel: {
      type: Boolean,
      default: false,
    },
    closeFromWindowClick: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    const hlAlert = ref(null)
    function removeModal () {
      props.closeFromWindowClick && window.removeEventListener('click', removeModal)
      let parent = (hlAlert.value && (hlAlert.value).parentNode) || null
      if (hlAlert.value && document.body.contains(parent)) {
        document.body.removeChild(parent)
      }
    }
    function handleCancel () {
      removeModal()
      props.callbackCancel && props.callbackCancel()
    }
    function handleOk () {
      removeModal()
      props.callback && props.callback()
    }
    onMounted(() => {
      setTimeout(() => {
        props.closeFromWindowClick && window.addEventListener('click', removeModal)
      }, 100)
    })
    return {
      hlAlert,
      handleOk,
      handleCancel
    }
  }
})
</script>

<style lang="scss">
  @mixin box-sizing($value) {
    box-sizing: $value;
    -webkit-box-sizing: $value;
    -o-box-sizing: $value;
    -moz-box-sizing: $value;
  }

  @mixin box($w, $h) {
    height: $h;
    width: $w;
    padding: 0;
    box-sizing: border-box;
    @include box-sizing(border-box);
  }
  .base-alert {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    @include box(100%, 100%);
    top: 0;
    left: 0;
    z-index: 2;
    .g-row-flex-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .m-pop-close {
      position: absolute;
      right: 16px;
      top: 16px;
      cursor: pointer;
      z-index: 2;
    }
    .m-pop-title {
      font-size: 15px;
      font-weight: 500;
      color: #5A6371;
      text-indent: 24px;
      line-height: 40px;
      padding-top: 10px;
    }
    .m-pop-content {
      @include box(auto, auto);
      min-width: 372px;
      min-height: 156px;
      background: #fff;
      z-index: 1;
      box-shadow: 3px 5px 21px 0px rgba(183, 183, 183, 0.29);
      border: 1px solid #EBEBEB;
      padding-bottom: 24px;
      position: relative;
      border-radius: 8px;
    }
    .base-alert-bg {
      position: fixed;
      @include box(100%, 100%);
      top: 0;
      left: 0;
    }
    .m-pop-detail {
      padding-top: 32px;
    }
    .m-pop-message {
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      color: #737478;
      margin-bottom: 5px;
    }
    .m-pop-submessage {
      font-size: 14px;
      font-weight: 400;
      color: #5A6371;
      text-align: left;
      padding-left: 40px;
      max-width: 372px;
      margin: auto;
    }
    .g-edit-list {
      margin-bottom: 16px;
    }
    .g-btn-group {
      margin-top: 30px;
      padding-right: 16px;
    }
    .g-message-info {
      font-size: 14px;
      font-weight: 400;
      text-align: center;
    }
    // 按钮样式
    .u-base-pop-create,
    .u-base-pop-cancel {
      @include box(90px, 32px);
      cursor: pointer;
      border: none;
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #EFF7FF;
      font-size: 14px;
      font-weight: 500;
      border-radius: 4px;
    }
    .u-base-pop-create {
      background: #536FFF;
    }
    .u-base-pop-cancel {
      background-color: #fff;
      border: 1px solid;
      color: #2F51FF;
      border-color: #536FFF;
      margin-right: 20px;
      margin-bottom: 0;
    }
  }
</style>
