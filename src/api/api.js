import request from '@/utils/request'
// 用户登录
export function login (data) {
  return request({
    url: '/',
    method: 'post',
    data
  })
}
// 测试接口的使用
export function test () {
  return request({
    url: '/parameter/query',
    method: 'get'
  })
}
