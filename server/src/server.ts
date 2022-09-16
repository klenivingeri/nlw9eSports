import express from 'express'

const app = express()

app.get('/games', (request, response) => {
  return response.status(200).json([])
})

app.post('/ads', (request, response) => {
  return response.status(201).json([])
})

app.get('/games/:id/ads', (request, response) => {
  const  { id } = request.params
  
  return response.json([{id:1}, {id:2}, {id:3}])
})

app.get('/ads/:id/discord', (request, response) => {
  return response.json([{id:1}, {id:2}, {id:3}])
})

app.listen(3333) 