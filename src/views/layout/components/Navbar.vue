<template>
  <div class="nav-bar">
    <div class="left-box">
      navbar
    </div>
    <div class="right-box">
      <el-button @click="logout()">退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
  },
  methods: {
    async logout () {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login`)
    }
  }
}
</script>

<style lang="less" scoped>
.nav-bar{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
</style>
