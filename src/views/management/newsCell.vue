<template>
  <section class="financial-list">
    <section class="collect" @click="jumpPage">
      <aside>
        <h2>{{ newsDate.title }}</h2>
        <section class="Cleft clearfix">
          <img class="fl" src="./../../assets/logo.png" style="width:0.24rem;height:0.2rem;">
          <span class="fl">{{ newsDate.author_name }}</span>
        </section>
        <section class="Cright">
          <img src="./../../assets/logo.png" style="width:0.2rem;height:0.2rem;">
          <span>{{ newsDate.date }}</span>
        </section>
        <div style="clear: both"/>
      </aside>
      <aside>
        <img :src="newsDate.thumbnail_pic_s" style="border-radius: 0.2rem;">
      </aside>
      <div style="clear: both"/>
    </section>
  </section>
</template>
<script>
export default {
  name: 'NewsCell',
  props: {
    newsDate: {
      type: Object,
      default: function () {
        return Object
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    jumpPage: function () {
      window.location.href = this.newsDate.url
    }
  }
}
</script>
<style scoped>
</style>
