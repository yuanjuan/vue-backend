import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Layout from '@/views/Layout'
import Permission from '@/views/permission'

Vue.use(Router)

export const constantRoutes = [{
  path: '/login',
  name: 'Login',
  hidden: true,
  component: Login
},
// {
//   path: '/dashboard',
//   name: 'Dashboard',
//   component: Dashboard
// },
{
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  name: 'Dashboard',
  meta: { title: '概况' },
  children: [
    {
      path: '/dashboard',
      name: 'DashboardIndex',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '概况' }
    }
  ]
}, {
  path: '/guide',
  component: Layout,
  name: 'Guide',
  meta: { title: '引导页' },
  children: [
    {
      path: '/guide/index',
      name: 'GuideIndex',
      component: () => import('@/views/guide/index'),
      meta: { title: '引导页' }
    }
  ]
}, {
  path: '/readme',
  component: Layout,
  name: 'Readme',
  meta: { title: '导读' },
  children: [
    {
      path: '/readme/index',
      name: 'ReadmeIndex',
      component: () => import('@/views/readme/index'),
      meta: { title: '导读' }
    }
  ]
}, {
  path: '/multistep',
  component: Layout,
  name: 'Multistep',
  meta: { title: '步骤条' },
  children: [
    {
      path: '/multistep/index',
      name: 'MultistepIndex',
      component: () => import('@/views/multistep/index'),
      meta: { title: '步骤条' }
    }
  ]
}, {
  path: '/message',
  component: Layout,
  redirect: '/message/list',
  name: 'Message',
  meta: { title: '文章管理' },
  children: [
    {
      path: '/message/list',
      component: () => import('@/views/message/messageList.vue'),
      name: 'MessageList',
      meta: { title: '文章列表' }
    }, {
      path: '/message/edit',
      component: () => import('@/views/message/messageEdit.vue'),
      name: 'MessageEdit',
      meta: { title: '文章编辑' }
    }
  ]
}, {
  path: '/loading',
  component: Layout,
  name: 'Loading',
  meta: { title: 'loading' },
  children: [
    {
      path: '/loading/index',
      name: 'LoadingIndex',
      component: () => import('@/views/loading/index'),
      meta: { title: 'loading' }
    }
  ]
}, {
  path: '/management',
  component: Layout,
  name: 'Management',
  meta: { title: '管理管理' },
  children: [
    {
      path: '/management/index',
      component: () => import('@/views/management/management'),
      name: 'ManagementIndex',
      meta: { title: '管理中心' }
    }, {
      path: '/management/list',
      component: () => import('@/views/management/managementList'),
      name: 'ManagementList',
      meta: { title: '管理列表' }
    }
  ]
}]

export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    name: 'Permission',
    meta: { roles: ['admin'], title: '权限管理' },
    children: [
      {
        path: '/permission/index',
        component: Permission,
        name: 'PermissionIndex',
        meta: { roles: ['admin'], title: '权限主页' }
      }
    ]
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
