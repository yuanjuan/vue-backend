// 首先引入Mock
import Mock from 'mockjs'
import loginAPI from './login'

// 引入文件
// import user from './user'

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600'
})

// const mocks = [
//   ...user
// ]

// const responseFake = (url, type, respond) => {
//   return {
//     // url: new RegExp(`/mock${url}`),
//     url: url,
//     type: type || 'get',
//     response (req, res) {
//       res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
//     }
//   }
// }

// export default mocks.map(route => {
//   return responseFake(route.url, route.type, route.response)
// })
// 与demoList一起使用
// let configArray = []
// // 使用webpack的require.context()遍历所有mock文件
// const files = require.context('.', true, /\.js$/)
// files.keys().forEach((key) => {
//   if (key === './index.js') return
//   configArray = configArray.concat(files(key).default)
// })
// // 注册所有的mock服务
// configArray.forEach((item) => {
//   for (const [path, target] of Object.entries(item)) {
//     const protocol = path.split('|')
//     Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target)
//   }
// })
Mock.mock(/\/user\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(RegExp('/user/info'), 'get', loginAPI.getUserInfo)
Mock.mock(/\/user\/logout/, 'post', loginAPI.logout)
export default Mock
