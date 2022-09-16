import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { convertHourStringToMinutes }  from './utils/convert-hour-string-to-minutes'
import { convertMinutesStringTohours }  from './utils/convert-minutes-string-to-hours'

const app = express()

app.use(express.json())
app.use(cors())
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
  }) // Inclui a quantidades de referencia da ads  dos fames

  return response.status(200).json(games)
})

app.post('/games/:id/ads', async (request, response) => {
  const { id } = request.params
  const body = request.body;
  const ad = await prisma.ad.create({
    data:{ 
      gameId: id,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: convertHourStringToMinutes(body.hourStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
      createdAt: body.createdAt,
}})
  return response.status(201).json(ad)
})

app.get('/games/:id/ads', async (request, response) => {
  const  { id } = request.params
  const ads = await prisma.ad.findMany({
    select: { 
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    }, // select apenas se quiser campos espeficicos 
    where: { 
      gameId: id
    },// busca os ads pelo gameId
    orderBy: { 
      createdAt: 'desc' // ordena os registros
    }
  })
  convertMinutesStringTohours
  return response.json(ads.map(ad => ({
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: convertMinutesStringTohours(ad.hourStart),
      hourEnd: convertMinutesStringTohours(ad.hourEnd)
    })
  ))
})

app.get('/ads/:id/discord',  async (request, response) => {
  const { id } = request.params

  const ad = await prisma.ad.findUniqueOrThrow({ // quando for retornar um unico dado, se não encontrar dispara um erro
    select: {
      discord:true,
    },
    where: {
      id,
    }
  })

  return response.json({
    discord: ad.discord
  })
})

app.listen(3333) 