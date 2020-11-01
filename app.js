// app.js
const express = require('express')
const app = express()
app.locals.moment = require('moment')
const port = 3000

app.use( (req, res, next) => {
    const reqTime = Date.now()
    const time = app.locals.moment(reqTime).format('YYYY-MM-DD hh:mm:ss')
    const method_url = req.method + ' from ' + req.originalUrl
    console.log(`${time} | ${method_url}`)
    res.on('finish', () =>{
        const resTime = Date.now()
        const timeDifference = resTime - reqTime
        console.log(`${app.locals.moment(resTime).format('YYYY-MM-DD hh:mm:ss')} | ${method_url} | total time: ${timeDifference}ms`)
    })
    next()
})

app.get('/', (req, res, next) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res, next) => {
  res.send('新增 Todo 頁面')
})
 
app.get('/:id', (req, res, next) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res, next) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})