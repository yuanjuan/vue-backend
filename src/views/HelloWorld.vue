<template>
  <div class="hello">
    <h2>Essential Links</h2>
  </div>
</template>

<script>
import { test } from '@/api/api'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  created () {
    this.testFun()
  },
  methods: {
    testFun () {
      test().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
