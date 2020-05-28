const Mock = require('mockjs')
const Random = Mock.Random
const productNewsData = function () {
  const articles = []
  for (let i = 0; i < 100; i++) {
    const newArticleObject = {
      title: Random.csentence(5, 30),
      thumbnail_pic_s: Random.dataImage('300X250', 'mock的图片'),
      author_name: Random.cname(),
      date: Random.date() + ' ' + Random.time()
    }
    articles.push(newArticleObject)
  }
  return {
    articles: articles
  }
}
Mock.mock('/news/index', 'post', productNewsData)
