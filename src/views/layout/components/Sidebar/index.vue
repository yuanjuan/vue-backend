<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :router="true" :default-active="$route.path">
      <template v-for="item in permission_routes">
        <el-submenu v-if="!item.hidden" :index="item.path" :key="item.name">
          <template slot="title">
            <i class="el-icon-message"/>{{ item.meta.title }}
          </template>
          <template v-if="item.children">
            <el-menu-item v-for="child in item.children" :key="child.name" :index="child.path">{{ child.meta.title }}</el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SideBar',
  computed: {
    ...mapGetters([
      'permission_routes'
    ])
  }
}
</script>
