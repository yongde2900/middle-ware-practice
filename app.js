// app.js
const express = require('express')
const app = express()
app.locals.moment = require('moment')
const port = 3000
let reqTime
let method_url

app.use( (req, res, next) => {
    reqTime = Date.now()
    const time = app.locals.moment(reqTime).format('YYYY-MM-DD hh:mm:ss')
    method_url = req.method + ' from ' + req.originalUrl
    console.log(`${time} | ${method_url}`)
    next()
})

app.get('/', (req, res, next) => {
  res.send('列出全部 Todo')
  next()
})

app.get('/new', (req, res, next) => {
  res.send('新增 Todo 頁面')
  next()
})
 
app.get('/:id', (req, res, next) => {
  res.send('顯示一筆 Todo')
  next()
})

app.post('/', (req, res, next) => {
  res.send('新增一筆  Todo')
  next()
})

app.use( (req, res) => {
    const resTime = Date.now()
    const time = app.locals.moment(resTime).format('YYYY-MM-DD hh:mm:ss')
    const timeDifference = resTime - reqTime
    console.log(`${time} | ${method_url} | total time: ${timeDifference}ms`)
})
app.listen(port, () => {
  console.log(`App running on port ${port}`)
})