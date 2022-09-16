import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient({
  log: ['query']
}) // faz a conexão com o banco automaticamente

app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        }
      }
    }
  }) // Informa a quantidades de ads para o game 

  return response.status(200).json(games)
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