<template>
  <div v-if="isLoading" class="loading"/>
</template>

<script>
export default {
  name: 'Loading', // 定义的组件名称 使用时写法：loading
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">
.loading {
  position: fixed;
  left: 0;
  top: 0;
  background: url('~@/assets/load.gif') center center no-repeat #fff;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}
</style>
