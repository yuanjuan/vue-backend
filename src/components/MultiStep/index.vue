<template>
  <div class="multi-step">
    <ul class="steps">
      <li v-for="(item, index) in setData" :key="item+index" :class="{'active': steps === index}">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MultiStep',
  props: {
    steps: {
      type: Number,
      default: 0
    },
    setData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .steps{
    position: relative;
    margin-bottom: 30px;
    counter-reset: step; /*创建步骤数字计数器*/
    li{
      list-style-type: none;
      font-size: 12px;
      text-align: center;
      width: 15%;
      position: relative;
      float: left;
      &:before{
        display: block;
        content: counter(step); /*设定计数器内容*/
        counter-increment: step; /*计数器值递增*/
        width: 32px;
        height: 32px;
        background-color: #019875;
        line-height: 32px;
        border-radius: 32px;
        font-size: 16px;
        color: #ffffff;
        text-align: center;
        font-weight: 700;
        margin: 0 auto 8px auto;
      }
      ~li:after{ /*连接线*/
        content: '';
        width: 100%;
        height: 2px;
        background-color: #019875;
        position: absolute;
        left: -50%;
        top: 15px;
        z-index: -1;  /*放置在数字后面*/
      }
      &.active:before, &.active:after{
        background-color: #019875;
      }
      &.active~li:before, &.active~li:after{
        background-color: #777777;
      }
    }
  }
</style>
