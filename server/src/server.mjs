import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  console.log(response.json([{id:1}, {id:2}, {id:3}]))
})

app.listen(3333)