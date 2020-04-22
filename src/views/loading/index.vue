<template>
  <div class="loading-page">
    <h2>loading</h2>
    <loading :is-loading="isLoading"/>
    <button @click="showLoading()">显示loading</button>
  </div>
</template>

<script>
import Loading from './../../components/loading'
export default {
  name: 'LoadingPage',
  components: { Loading },
  data () {
    return {
      isLoading: false
    }
  },
  created () {
  },
  methods: {
    showLoading () {
      this.isLoading = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>

