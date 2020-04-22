<template>
  <div class="multi-step-page">
    <h2>步骤条</h2>
    <multi-step :steps="steps" :set-data="stepData"/>
    <button @click="add()">添加步骤</button>
  </div>
</template>

<script>
import MultiStep from './../../components/MultiStep'
export default {
  name: 'MultiStepPage',
  components: { MultiStep },
  data () {
    return {
      steps: 0,
      stepData: ['用户信息', '魔童哪吒', '齐天大圣', '赤脚大仙', '我爱中国']
    }
  },
  created () {
  },
  methods: {
    add () {
      this.steps = this.steps + 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
