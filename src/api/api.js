import request from '@/utils/request'
// 用户登录
export function login (data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
// 获取用户信息
export function getInfo (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
// 退出
export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
// 测试接口的使用
export function test () {
  return request({
    url: '/parameter/query',
    method: 'get'
  })
}
