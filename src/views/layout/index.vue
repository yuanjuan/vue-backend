<template>
  <div class="app-wrapper">
    <sidebar class="app-sidebar"/>
    <div class="main-container">
      <div>
        <navbar/>
      </div>
      <app-main/>
    </div>
  </div>
</template>

<script>
import { AppMain, Sidebar, Navbar } from './components'
export default {
  name: 'Layout',
  components: {
    AppMain,
    Sidebar,
    Navbar
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
.app-wrapper{
  display: flex
}
</style>
